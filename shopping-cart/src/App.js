import React from 'react';
import { Route,Link } from 'react-router-dom'
import './App.css';
import { Dashboard } from './component/Dashboard';
import { ProductDetails } from './component/ProductDetails';
import { ProductsCart } from './component/ProductsCart';
import { Signin } from './component/Signin';

function App() {
  const openSidebarMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeSidebarMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
          <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openSidebarMenu}>&#9776;</button>
            <Link to="/">Amazon</Link>
        </div>
    <div className="header-links">
        <Link to="/products/cart">Cart</Link>{' '}
        <Link to="/signin">Signin</Link>
    </div>
</header>
    <aside className="sidebar">
        <h3>Shoping Categories</h3>
        <button className="sidebar-close-button" onClick={closeSidebarMenu}>x</button>
        <ul>
            <li>
                <Link to="/">Pants</Link>
            </li>
            <li>
                <Link to="/">Shirts</Link>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
            <Route path="/"  exact ={true} component={Dashboard}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/products/cart" component={ProductsCart}></Route>
    </div>
    </main>
    <footer className="footer">
        All rights received... 2020
    </footer>
</div>
  );
}

export default App;
