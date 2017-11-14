import React, {Component} from 'react'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
    <div>
        <h2>购物车</h2>
        <hr/>
        <ProductsContainer/>
        <hr/>
        <CartContainer />
    </div>
)


export default App