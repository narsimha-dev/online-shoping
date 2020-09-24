import React from 'react';
import data from './data';

export const Dashboard=(props)=>{
    return <ul class="products">
     { data.products.map((product,index)=>{ return  <li class="product" key={index}>
    <img class= "product-image" src={product.image} alt="product"/>
    <div class="product-name"><a href="product.html">{product.name}</a></div>
    <div class="product-rating">{product.rating} 
<span className="fa fa-star checked"></span> starts ({product.no_rating} Reviews)</div>
    <div class="product-brand">{product.brand}</div>
    <div class="product-price">{product.price}</div>
    </li>
   })
   };
   </ul>
}