import React from 'react';
import './Dail.css'
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div className='card'>
            <h2>This is Dial component!!</h2>
            <p>Your Steps Count: {props.steps}</p>
            <Knob steps ={props.steps}></Knob>
        </div>
    );
};

export default Dial;