import React from 'react'

const Product = ({ price, inventory, title }) => (
    <div>
        {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
    </div>
)

export default Product
