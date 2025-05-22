import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css'



let count = 0;

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const[inputref] = useRef(null)

    const add = () =>{
        setTodos([...todos, {no:count++, text:inputref.current.value, display: "" }]);

        // refresh the value
        inputref.current.value = "";
    }

    useEffect(
        () =>{
            console.log(todos);
        }, [todos])

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputref} type="text"  placeholder='Add your task' className='todo-input' />
            <div onClick={()=>{add}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">

        </div>
    </div>
  )
}

export default Todo