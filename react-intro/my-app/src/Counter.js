import React, { useState } from 'react';

function Counter () {

    const [count, setCount] = useState(0);

    function increment () {
        setCount(count => count + 1);
    };

    function decrement () {
        setCount(count => count - 1);
    };

    return (
        <div>

            <h1>Count is {count}</h1>
            <button onClick={increment}>Add to count</button>
            <button onClick={decrement}>Subtract from count</button>

        </div> 
    )

};

export default Counter