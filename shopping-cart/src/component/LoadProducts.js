import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

export const LoadProducts=()=>{
    return <ul className="products">
    { data.products.map((product,index)=>{ return  <li className="product" key={index}>
    <Link to={"/product/"+product.id}>
        <img className= "product-image" src={product.image} alt="product"/>
        </Link>
   <div className="product-name"><Link to={"/product/"+product.id}>{product.name}</Link></div>
   <div className="product-rating">{product.rating} 
    <span className="fa fa-star checked"></span> starts ({product.no_rating} Reviews)</div>
   <div className="product-brand">{product.brand}</div>
   <div className="product-price">{product.price}</div>    
    </li>
    })
}
    </ul>
    }
