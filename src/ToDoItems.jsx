import React from 'react';
import { useState } from 'react';
import ToDoForm from './components/ToDoForm';

function ToDoItems() {
  const [arr, setArr] = useState([]);

  const handleNote = (newItem) => {
    console.log('handler');
    setArr([...arr, newItem]);
  };

  const handleDelete = (el) => {
    setArr(arr.filter((x, i) => i !== el));
  };

  return (
    <div className="ToDoItems">
      <ToDoForm items={arr} use={handleNote} />
      <div className="ToDos">
        {arr.map((value, index) => {
          return (
            <div className="todo" key={index}>
              <h2 className="task">{value.item}</h2>
              <h2 className="data">{value.data}</h2>
              <button className="Delete" onClick={() => handleDelete(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoItems;
