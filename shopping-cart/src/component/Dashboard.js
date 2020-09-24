import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

export const Dashboard=(props)=>{
    return <ul class="products">
     { data.products.map((product,index)=>{ return  <li class="product" key={index}>
     <Link to={"/product/"+product.id}>
         <img class= "product-image" src={product.image} alt="product"/>
         </Link>
    <div class="product-name"><Link to={"/product/"+product.id}>{product.name}</Link></div>
    <div class="product-rating">{product.rating} 
     <span className="fa fa-star checked"></span> starts ({product.no_rating} Reviews)</div>
    <div class="product-brand">{product.brand}</div>
    <div class="product-price">{product.price}</div>
    </li>
   })
   };
   </ul>
}