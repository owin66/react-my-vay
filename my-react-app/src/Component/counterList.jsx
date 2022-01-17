import React, {useState} from 'react';
import Counter from "./counter";

const CounterList = () => {
    const [counters, setCounters] = useState([
        {id: 0, value: 0, name: 'Ненужная вещь', price:200},
        {id: 1, value: 0, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id)
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
                         {...count}/>)}
        </div>
    );
};

export default CounterList;