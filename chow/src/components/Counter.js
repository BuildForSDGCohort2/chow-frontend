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
            return count === 1;
        } else {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
       <div className="row">
           <div className="col-sm-12 py-2 counter">
                <button onClick={handleDecrement} className="count minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <span className="mx-3 countNum px-3">{count}</span>
                <button onClick={handleIncrement} className="count plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
           </div>
       </div>
    );
};

export default Counter;