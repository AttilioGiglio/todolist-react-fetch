import React, { useEffect, useState} from 'react';
import Form  from './Form'
import List from './List'

function Home1() {
    const [ todos, setTodos ] = useState([]);
  
    useEffect(() => {
      getTodos();
    }, []);
   
    
    async function getTodos() {
      const url =
        "https://assets.breatheco.de/apis/fake/todos/user/attiliogiglio";
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
    }
  
    async function removeTodo(id) {
      const newTodos = (todos.filter(todo => todo.id !== id));
      
      setTodos(
        newTodos
        );
  
      const url =
        "https://assets.breatheco.de/apis/fake/todos/user/attiliogiglio";
      const response = await fetch(url, {
        method: "delete",
        body: JSON.stringify(newTodos),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      alert(data.result);
    }
  
    async function addTodo(todo) {
      const list = [todo, ...todos ];
      setTodos(
        list
      );
  
      const url =
        "https://assets.breatheco.de/apis/fake/todos/user/attiliogiglio";
      const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(list),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      alert(data.result);
    }
  
    function toggleComplete(id) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    }
  
    return (
      <>
        <h1>
          Todos
        </h1>
        <Form addTodo={addTodo} />
        <List
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </>
    );
  }
  
  export default Home1;