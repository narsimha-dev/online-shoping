import React from 'react';
import data from './data';
import SingleProductDetails from './LoadProductDetails';

function ProductDetails(props){
    const pId=props.match.params.id;
    const product=data.products.find(x=>x.id===pId);
return <div>
        ProductDetails: {product.name}
        <ul className="products">
            <SingleProductDetails product={product}/>
            </ul>
</div>
}
export default ProductDetails;