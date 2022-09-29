import React from 'react';
import Avatar from '../../Avatar.png';
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <div className='author'>
                <img className='author-img' src={Avatar} alt=""></img>
                <div className='author-details'>
                    <p className='author-name'>A Name</p>
                    <p className='author-place'>A, Country</p>
                </div>
            </div>

            <div className='author-info'>
                <div className='author-details'>
                    <p className='author-name'>75 <sub>kg</sub></p>
                    <p className='author-place'>Weight</p>
                </div>
                <div className='author-details'>
                    <p className='author-name'>6.5</p>
                    <p className='author-place'>Height</p>
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
    );
};

export default Cart;