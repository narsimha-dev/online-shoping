import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

function ProductDetails(props){
    const pId=props.match.params.id;
    const product=data.products.find(x=>x.id===pId);
return <div>
        {/* <ul className="products">
            <SingleProductDetails product={product}/>
            </ul> */}
<div className="back-to-result">
            <Link to="/">Back to Result</Link>
</div>
<div className="details">
    <div className="details-image">
        <img src={product.image} alt="product"></img>
    </div>
    <div className="details-info">
        <ul>
            <li><h4><b>Name:</b> {product.name}</h4></li>
            <li><b>Rating:</b> {product.rating} Starts ({product.no_rarting} Reviews)</li>
            <li><b>Price:</b>{product.price}</li>
            <li><b>Description:</b>
        <div>{product.description}</div>
        </li>
        </ul>
    </div>
    <div className="details-action">
        <ul>
            <li><b>Price:</b> {product.price}</li>
            <li><b>Status:</b> {product.status}</li>
            <li><b>Qty:</b>
                 <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                </li>
                <br></br>
                <li><button className="add-cart-btn">Add to Cart</button></li>
        </ul>
    </div>
</div>
</div>
}
export default ProductDetails;