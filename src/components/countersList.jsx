import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const iniialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = useState(iniialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleIncrement = (id) => {
    const newValue = counters.map((item) => {
      return {
        ...item,
        value: item.id === id ? item.value + 1 : item.value,
      };
    });
    setCounters(newValue);
  };
  const handleDecrement = (id) => {
    const newValue = counters.map((item) => {
      return {
        ...item,
        value: item.id === id ? item.value - 1 : item.value,
      };
    });
    setCounters(newValue);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
    </>
  );
};

export default CountersList;
