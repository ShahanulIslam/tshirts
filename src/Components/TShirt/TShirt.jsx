import React from 'react';
import "./TShirt.css"

const TShirt = ({tShirt,handleAddToCart}) => {
    const {name,price,picture,gender} =tShirt

    return (
        <div className='t-shirt-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price : ${price}</p>
            <button onClick={() =>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;