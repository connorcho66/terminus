// import models here
const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order, Badge } = require("../models");
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
      return Product.find();
    },
    //return product page based on id
    product: async (parent, args) => {
      return Product.findOne({ _id: args._id }).populate("category");
    },

    //find user based on username
    user: async (parent, args) => {
      return User.findOne({ username: args.username });
    },

    //returns all users
    users: async() => {
        return User.find()
    },

    //returns profile of signed in user
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });

        return user;
      }

      throw new AuthenticationError("Not logged in");
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
      ).populate('badges');

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

    login: async (parent, args) => {
      console.log(args);
      const user = await User.findOne({ email: args.email });
      console.log(user);
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword({
        password: args.password,
      });

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
