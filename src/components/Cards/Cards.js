import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div>
                <h1>Daily Fitness</h1>
                <h2>Select Today's Exercise</h2>
            </div>
            <div className='cards'>
                {
                    cards.map(c => <Card
                        key={c.id}
                        card={c}
                    ></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Cards;