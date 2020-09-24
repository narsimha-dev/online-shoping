import React from 'react';

export const ProductDetails=(props)=>{
    console.log('product Details: ',props.match.params.id);
    const pId=props.match.params.id;
    return <div>ProductDetails</div>
}