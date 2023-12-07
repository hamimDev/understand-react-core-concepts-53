import React from 'react';

const Knob = (props) => {
    return (
        <div className='card'>
            <h3>This is Knob Component</h3>
            <p>Steps here is: {props.steps}</p>
        </div>
    );
};

export default Knob;