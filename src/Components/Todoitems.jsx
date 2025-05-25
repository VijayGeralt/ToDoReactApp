import './CSS/Todoitems.css'
import tick from './Assests/tick.png'
import cross from './Assests/cross.png'
import not_tick from './Assests/not_tick.png'

const Todoitems = ({no, display, text, setTodos}) => {

  const DeleteTodo = (no) =>{
    // Gets the todos data
    let todosData = JSON.parse(localStorage.getItem('todos'));
    // Filters only the todosData whose no is not equal to the no of the item to be deleted
    todosData = todosData.filter((todo) => todo.no !== no);

    // Now we update the todosData and afterwards the useEffect will eventually update the todos in localStorage
    setTodos(todosData); 
  }

  const Toggle = () => {
    let todosData = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todosData.length; i++)
    {
      if(todosData[i].no === no) {
        if(todosData[i].display === "")
        {
          todosData[i].display = 'line-through';
        }
        else {
          todosData[i].display = '';
        }

        break;
      }
    }

    setTodos(todosData);
  }

  return (
    <div className='todoitems'>
      {/* <div className="todoitems-container" onClick={()=>Toggle()}></div> */}
      <div className={`todoitems-container ${display}`} onClick={()=>Toggle()}>
        {display === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
        {/* <img src={not_tick} alt="" />
        <img src={tick} alt="" /> */}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' src={cross} onClick={()=>{DeleteTodo(no)}} alt="" />
    </div>
  )
}

export default Todoitems