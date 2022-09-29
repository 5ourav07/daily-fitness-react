import React, { useState } from 'react';
import Avatar from '../../Avatar.png';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ data }) => {
    const [breakTime, setBreakTime] = useState('')

    const notify = () => toast("Activity Completed!");

    let time = 0;

    for (const d of data) {
        time = time + d.duration;
    }

    return (
        <div className='cart'>
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
                    <button className='time' onClick={() => { setBreakTime(10) }}>10s</button>
                    <button className='time' onClick={() => { setBreakTime(20) }}>20s</button>
                    <button className='time' onClick={() => { setBreakTime(30) }}>30s</button>
                    <button className='time' onClick={() => { setBreakTime(40) }}>40s</button>
                    <button className='time' onClick={() => { setBreakTime(50) }}>50s</button>
                </div>
            </div>

            <div>
                <h3 className='break-title'>Exercise Details</h3>
                <p className='exercise'>Exercise Time: {time} seconds</p>
                <p className='exercise'>Break Time: {breakTime} seconds</p>
            </div>

            <div>
                <button onClick={notify} className='btn-exercise'>
                    <p className='btn-text'>Activity Completed</p>
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;