import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route,Link } from 'react-router-dom'
import './App.css';
import data from './component/data';
import { Dashboard } from './component/Dashboard';
import { ProductDetails } from './component/ProductDetails';

function App() {
  const openSidebarMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeSidebarMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    //   <BrowserRouter>
          <div class="grid-container">
    <header class="header">
        <div class="brand">
            <button onClick={openSidebarMenu}>&#9776;</button>
            <Link to="/">Amazon</Link>
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
            <Route path="/"  exact ={true} component={Dashboard}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
    </div>
    </main>
    <footer class="footer">
        All rights received... 2020
    </footer>
</div>

// </BrowserRouter>
  );
}

export default App;
