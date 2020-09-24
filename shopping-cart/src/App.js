import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './component/data';

function App() {
  const openSidebarMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeSidebarMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div class="grid-container">
    <header class="header">
        <div class="brand">
            <button onClick={openSidebarMenu}>&#9776;</button>
            <a href="index.html">Amazon</a>
        </div>
    <div class="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Signin</a>
    </div>
</header>
    <aside class="sidebar">
        <h3>Shoping Categories</h3>
        <button class="sidebar-close-button" onClick={closeSidebarMenu}>x</button>
        <ul>
            <li>
                <a her="index.html">Pants</a>
            </li>
            <li>
                <a her="index.html">Shirts</a>
            </li>
        </ul>
    </aside>
    <main class="main">
        <div class="content">
         <ul class="products">
           {console.log("===", data.products)}
           { data.products.map((product,index)=>{ return  <li class="product" key={index}>
            <img class= "product-image" src={product.image} alt="product"/>
            <div class="product-name"><a href="product.html">{product.name}</a></div>
            <div class="product-brand">{product.brand}</div>
            <div class="product-price">{product.price}</div>
            <div class="product-rating">`${product.rating} starts (${product.no_rating} Reviews)`</div>
            </li>
           })
           };
        </ul>
    </div>
    </main>
    <footer class="footer">
        All rights received... 2020
    </footer>
</div>
  );
}

export default App;
