import React, {useState} from 'react'
import { v4 as uuid } from "uuid";

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState(
        {
            id:"",
            label:"",
            done:false
        });
   
    function handleTaskInputChange(e){
        setTodo({
            ...todo,
            label:e.target.value, done:false
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.label.trim()){
            addTodo({...todo, id: uuid()});
            setTodo({
              ...todo,
              label:""  
            });
        }
    }

    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          label="Label"
          name="label"
          type="text"
          value={todo.label}
          onChange={handleTaskInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
}
export default TodoForm;