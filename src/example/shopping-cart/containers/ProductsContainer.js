import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import {getVisibleProducts} from '../reducers/products'

const ProductsContainer = ({products, addToCart}) => (
    <ProductsList title="商品列表">
        {products.map(product =>
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}/>
        )}
    </ProductsList>
)

const mapStateToProps = state => {
    return {
        products: getVisibleProducts(state.products)
    }
}

export default connect(
    mapStateToProps,
    {addToCart}
)(ProductsContainer)