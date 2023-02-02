const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        coOp: CoOp
        orders: [Order]
        badges: [Badge]
    }

    type Product {
        _id: ID
        name: String!
        description: String
        stock: Int
        price: Float
        image: String
        category: Category
    }

    type CoOp {
        _id: ID
        name: String!
        users: [User]
        inventory: [Product]
    }

    type Order{
    _id: ID
    products: [Product]
    }

    type Badge {
        _id: ID
        name: String!
        description: String
        image: String
    }

    type Category {
        _id: ID
        name: String!
    }

    type Auth {
        token: ID
        user: User
    }

    type Checkout {
        session: ID
    }

    type Query {
        products(category: ID, name: String): [Product]
        allProducts: [Product]
        product(_id: ID!): Product
        user(username: String): User
        me: User
        checkout(products: [ID]!): Checkout
        order(_id: ID!): Order
        users: [User]
    }

    type Mutation {
        addCoOpToUser(coOpId: ID!, userId: ID!): User
        addBadge(name: String): Badge
        addBadgeToUser(badgeId: ID!, userId: ID!): User
        addCategory(name: String): Category
        addProduct(name: String, price: Float, category: ID): Product
        addUser(username: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(username: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(username: String!, password: String!): Auth
    }
`

module.exports = typeDefs