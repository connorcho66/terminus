import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID, $name: String) {
    products(category: $category, name: $name) {
      _id
      name
      description
      price
      stock
      image
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
        _id
        name
        description
        price
        stock
        category {
            name
        }
    }
  }
`

export const QUERY_SINGLE_PRODUCT = gql`
    query getProduct($productId: ID!){
        product(_id: $productId) {
            _id
            name
            description
            price
            quantity
            category {
                _id
                name
            }
        }
    }
`

export const QUERY_SINGLE_USER = gql`
    query getUser($username: String){
        user(username: $username){
            _id
            username
            email
            coOp {
                name
            }
            badges {
                name
            }
        }
    }
`

export const QUERY_ME = gql`
    query me{
        me{
            _id
            username
            email
            coOp {
                name
            }
        }
    }
`

