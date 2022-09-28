import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, description, age, duration, img } = props.card;

    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>{age}</h3>
            <h3>{duration}</h3>
        </div>
    );
};

export default Card;