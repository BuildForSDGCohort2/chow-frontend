import React, { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = (e) => {
        setCount(prevCount => prevCount + 1);
        e.preventDefault();
    };
    const handleDecrement = (e) => {
        e.preventDefault();
        if(count <= 1) {
            return count === 1
        } else {
            setCount(prevCount => prevCount - 1);
        };
    };

    return (
       <div className="row">
           <div className="col-sm-12 my-1 counter">
                <button onClick={handleDecrement} className="count minus"></button>
                <span className="mx-3 countNum px-3">{count}</span>
                <button onClick={handleIncrement} className="count plus"></button>
           </div>
       </div>
    );
};

export default Counter;