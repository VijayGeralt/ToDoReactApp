import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css'
import Todoitems from './Todoitems';



let count = 0;

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputref = useRef(null);

    const AddTodo = () =>{
        setTodos([...todos, {no:count++,text:inputref.current.value,display:"" }]);

        // refresh the value
        inputref.current.value = "";

        // Set count variable to localstorage
        localStorage.setItem('todos_count', count);
    }

    // This useEffect hook gets called when the page reloads
    useEffect(
        () => {
            // Sets the todos state after getting the "todos" item from local storage
            setTodos(JSON.parse(localStorage.getItem("todos")));
            // Sets the count variable from the "todos_count" item in local storage
            count = localStorage.getItem('todos_count');
        }, []
    )

    // This useEffect hook gets called when "todos" state changes
    // Save todos to localstorage when the component (todos) updates
    useEffect(
        () => {
            setTimeout(
                () => {
                    console.log(todos);
                    localStorage.setItem("todos", JSON.stringify(todos));
                }, 100
            );
        },[todos]
    )

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputref} type="text" placeholder='Add your task' className='todo-input' />
            <div onClick={()=>{AddTodo()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item, index)=>{
                return <Todoitems key={index} setTodos={setTodos} no={item.no} display ={item.display} text={item.text} />
            })}
        </div>
    </div>
  )
}

export default Todo