import React from 'react';
import { Link } from 'react-router-dom';
import { LoadProducts } from './LoadProducts';

const Dashboard=(props)=>{
    const openSidebarMenu=()=>{
        document.querySelector(".sidebar").classList.add("open");
      }
      const closeSidebarMenu=()=>{
        document.querySelector(".sidebar").classList.remove("open");
      }
return  <div className="grid-container">
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
        <LoadProducts/>
</div>
</main>
<footer className="footer">
    All rights received... 2020
</footer>
</div>
}
export default Dashboard;