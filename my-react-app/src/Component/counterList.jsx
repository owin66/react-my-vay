import React from 'react';
import Counter from "./counter";

const CounterList = () => {
    const counters = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 0, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]

    return (
        <div>
            {counters.map((count) =>
                <Counter key={count.id}
                         value={count.value}
                         name={count.name}/>)}
        </div>
    );
};

export default CounterList;