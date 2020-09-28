import React from 'react';
import { Link } from 'react-router-dom';


function SingleProductDetails(props){
    const {product}=props;
        return <ul className="products">
         <li className="product">
        <Link to={"/product/"+product.id} key={product.id}>
            <img className= "product-image" src={product.image} alt="product"/>
            </Link>
       <div className="product-name"><Link to={"/product/"+product.id}>{product.name}</Link></div>
       <div className="product-rating">{product.rating} 
        <span className="fa fa-star checked"></span> starts ({product.no_rating} Reviews)</div>
       <div className="product-brand">{product.brand}</div>
       <div className="product-price">{product.price}</div>    
        </li>
        </ul>
    }

export default SingleProductDetails;