import React, {useState} from "react";


const Counter = () => {
    const [count, setCount] = useState(0)

    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }
    const getBageClasses = () => {
        return classes
    }
    let classes = 'badge m-2 ';
    classes += count === 0 ? 'bg-warning' : 'bg-primary';

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const handleDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <div>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleIncrement}>
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleDecrement}>
                -
            </button>
        </div>
    );
}

export default Counter