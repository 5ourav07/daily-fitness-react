import React, { useEffect, useState } from 'react';
import './Details.css'
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Details = () => {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    const handleAddToCart = (card) => {
        console.log(card);
        const newCart = [...cart, card];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className='cards'>
                {
                    cards.map(c => <Card
                        key={c.id}
                        card={c}
                        handleAddToCart={handleAddToCart}
                    ></Card>
                    )
                }
            </div>

            <div className='cart'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Details;