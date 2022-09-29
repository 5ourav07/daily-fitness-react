import React, { useEffect, useState } from 'react';
import './Details.css'
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../Utilities/Utilities';
import Questions from '../Questions/Questions';

const Details = () => {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedCard = cards.find(card => card.id === id)
            if (addedCard) {
                savedCart.push(addedCard);
            }
        }
        setCart(savedCart);
    }, [cards]);

    const handleAddToCart = (card) => {
        const newCart = [...cart, card];
        setCart(newCart);
        addToDb(card.id);
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

                <Questions></Questions>
            </div>

            <div className='cart'>
                <Cart data={cart}></Cart>
            </div>
        </div>
    );
};

export default Details;