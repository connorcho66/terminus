import React, { createContext, useContext } from 'react';
import {useShopReducer} from './reducers'

const ShopContext = createContext()

const {Provider} = ShopContext

const ShopProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useShopReducer({
        products: [],
        cart: [],
        cartOpen: false,
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useShopContext = () => {
    return useContext(ShopContext)
}

export {ShopProvider, useShopContext}