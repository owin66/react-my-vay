import React from "react";


const Counter = () => {
    const count = 0;
    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }

    return (
        <>
            <span>{formatCount()}</span>
            <button>+</button>
        </>
    );
}

export default Counter