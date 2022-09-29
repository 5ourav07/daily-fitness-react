import React, { useEffect, useState } from 'react';
import Avatar from '../../Avatar.png';
import './Details.css'
import Card from '../Card/Card';

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
                <div className='author'>
                    <img className='author-img' src={Avatar} alt=""></img>
                    <div className='author-details'>
                        <p className='author-name'>Sourav Saha</p>
                        <p className='author-place'>Dhaka, BD</p>
                    </div>
                </div>

                <div className='author-info'>
                    <div className='author-details'>
                        <p className='author-name'>6.5</p>
                        <p className='author-place'>Height</p>
                    </div>
                    <div className='author-details'>
                        <p className='author-name'>75 <sub>kg</sub></p>
                        <p className='author-place'>Weight</p>
                    </div>
                    <div className='author-details'>
                        <p className='author-name'>25 <sub>years</sub></p>
                        <p className='author-place'>Age</p>
                    </div>
                </div>

                <div>
                    <h3 className='break-title'>Add a Break</h3>
                    <div className='break-time'>
                        <button className='time'>10s</button>
                        <button className='time'>20s</button>
                        <button className='time'>30s</button>
                        <button className='time'>40s</button>
                        <button className='time'>50s</button>
                    </div>
                </div>

                <div>
                    <h3 className='break-title'>Exercise Details</h3>
                    <p className='exercise'>Exercise Time: </p>
                    <p className='exercise'>Break Time: </p>
                </div>

                <button className='btn-exercise'>
                    <p className='btn-text'>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Details;