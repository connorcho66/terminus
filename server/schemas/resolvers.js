// import models here
const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Order} = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    //will filter either by name or by category, depending on what is passed in
    products: async (parent, args) => {
      const params = {};

      if (args.category) {
        params.category = args.category;
      }

      if (args.name) {
        params.name = {
          $regex: args.name,
        };
      }

      return await Product.find(params).populate("category");
    },
    // will return all products in store
    allProducts: async () => {
      console.log("at products query");
      return Product.find();
    },
    //return product page based on id
    product: async (parent, args) => {
      return Product.findOne({ _id: args._id }).populate("category");
    },

    //find user based on username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('orders');
    },

    //returns all users
    users: async () => {
      return User.find();
    },

    //returns profile of signed in user
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      try {
        console.log(args);
        console.log(context.user);
        const url = new URL(context.headers.referer).origin;
        const order = await Order.create({ products: args.products });
        console.log(order);
        const line_items = [];
        const newOrder = await Order.findById(order._id).populate("products");
        // console.log('New order: ' + newOrder);
        // const userOrder = await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { orders: newOrder._id } }
        // );
        // console.log(newOrder._id);
        // console.log('User order:' + (userOrder).populate("products"));
        const { products } = newOrder;
        console.log(products);
        for (let i = 0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`],
          });

          console.log(products);
          console.log(products[i].price);
          const unitPrice = await Math.floor(products[i].price * 100);
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: unitPrice,
            currency: "usd",
          });

          line_items.push({
            price: price.id,
            quantity: 1,
          });
        }

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${url}/success?success=true`,
          cancel_url: `${url}/shop?success=false`,
        });

        return { session: session.id };
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    //will add new user, take what is returned from User.create and sign web token with that information
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // for testing purpose
    // addProduct: async (parent, args) => {
    //     const product = await Product.create(args)
    //     return product
    // },
    // for testing purpose
    // addCategory: async (parent, args) => {
    //     const category = await Category.create(args)
    //     return category
    // }
    // for testing purpose
    //  addBadge: async(parent, args) => {
    //     const badge = await Badge.create(args)
    //     return badge
    // },

    //adds a badge to the users array of badges
    addBadgeToUser: async (parent, args) => {
      console.log(args);
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $addToSet: { badges: args.badgeId } },
        { new: true }
      ).populate("badges");

      console.log(user);
      return user;
    },

    addCoOpToUser: async (parent, args) => {
      console.log(args);
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $set: { coOp: args.coOpId } },
        { new: true }
      ).populate("badges");

      console.log(user);
      return user;
    },

    addOrder: async (parent, args, context) => {
      if (context.user) {
        const order = new Order(args.products);

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    updateProduct: async (parent, args) => {
      const decrement = Math.abs(args.quantity) * -1;

      return await Product.findByIdAndUpdate(
        args._id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
