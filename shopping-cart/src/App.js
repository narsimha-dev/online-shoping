import React from 'react';
import { Route,Link } from 'react-router-dom'
import './App.css';
import data from './component/data';
import { Dashboard } from './component/Dashboard';
import { ProductDetails } from './component/ProductDetails';
import { ProductsCart } from './component/ProductsCart';
import { Signin } from './component/SIgnin';

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
            <Link to="/">Amazon</Link>
        </div>
    <div class="header-links">
        <Link to="/products/cart">Cart</Link>{' '}
        <Link to="/signin">Signin</Link>
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
            <Route path="/"  exact ={true} component={Dashboard}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/products/cart" component={ProductsCart}></Route>
    </div>
    </main>
    <footer class="footer">
        All rights received... 2020
    </footer>
</div>
  );
}

export default App;
