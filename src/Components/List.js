import React from 'react'
import Todo from './Todo'

 const TodoList = ({ todos, toggleComplete, removeTodo }) => {

    const todo = todos.length ? (
      todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        );
      })
    ) : (
      <p className="center"> No tienes ningun TODO! </p>
    );
    return <div className="todos collection">{todo}</div>;
 };

export default TodoList;