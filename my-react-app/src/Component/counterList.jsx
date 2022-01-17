import React, {useState} from 'react';
import Counter from "./counter";

const CounterList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь', price: 200},
        {id: 1, value: 0, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ];
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
        console.log('handleReset')
    }
    const handleIncrement = (id) => {
        const elementIndex = counters.findIndex((c) => c.id === id)
        const newCounters = [...counters]
        newCounters[elementIndex].value++;
        setCounters(newCounters)
    }
    const handleDecrement = (id) => {
        const elementIndex = counters.findIndex((c) => c.id === id)
        const newCounters = [...counters]
        newCounters[elementIndex].value--;
        setCounters(newCounters)
    }

    return (
        <div>
            {counters.map((count) =>
                <Counter key={count.id}
                    // id={count.id}
                    // value={count.value}
                    // name={count.name}
                    // counter={count}
                         onDelete={handleDelete}
                         {...count}
                         onIncrement={handleIncrement}
                         onDecrement={handleDecrement}/>)}
            <button className="btn btn-primary btn-sm m-2"
                    onClick={handleReset}>
                Сброс
            </button>
        </div>

    );
};

export default CounterList;