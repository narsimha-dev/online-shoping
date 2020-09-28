import React from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard';
import { Signin } from '../Signin';
import {ProductsCart} from '../ProductsCart';
import ProductDetails from '../ProductDetails';

export const MainRouter=()=>{
return <div>
            <Route path="/" exact ={true} component={Dashboard}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/products/cart" component={ProductsCart}></Route>
</div>
}
