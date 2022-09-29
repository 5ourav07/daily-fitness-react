import React from 'react';
import './Card.css';

const Card = ({ card, handleAddToCart }) => {
    const { name, description, age, duration, img } = card;

    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h2 className='card-name'>{name}</h2>
                <p>{description}</p>
                <h3>{age}</h3>
                <h3>{duration}</h3>
            </div>
            <button onClick={() => handleAddToCart(card)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Card;