import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
         <div className="card">
            <h1>This is my smart Watch!!</h1>
            <p>Steps: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>
            <h4>Dour Dee....</h4>
            </button>
            <Dial steps={count}></Dial>
         </div>
        </div>
    );
};

export default Watch;