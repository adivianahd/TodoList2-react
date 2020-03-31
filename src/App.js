import React from 'react';
import List from "./list";
import ToDoController from "./controllers/to-do";

function Todolist() {
  const todo = ToDoController();
  return (
    <div>
      <input type="text" value={todo.newTodo} onChange={todo.updateNewTodo} />
      <button onClick={todo.add}>Add</button>
      <div>
        <List data={todo.toDoList} onUpdate={todo.update} />
      </div>
    </div>
  );
}

export default Todolist;
