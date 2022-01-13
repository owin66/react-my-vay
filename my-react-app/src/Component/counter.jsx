import React from "react";


const Counter = () => {
    const count = 0;
    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }

    return (
        <>
            <span className='badge bg-primary m-2'>{formatCount()}</span>
            <button className='btn btn-primary btn-sm m-2'>+</button>
        </>
    );
}

export default Counter