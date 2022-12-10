import {FC} from 'react'
import {CiCircleRemove} from 'react-icons/ci'


const style = {
    li: `flex justify-between items-center bg-slate-300 p-4 my-2 capitalize rounded-md`,
    liComplete: `flex justify-between items-center bg-slate-400 p-4 my-2 capitalize rounded-md`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
  };


const Todo = ({todo, toggleComplete, deleteTodo}) => {

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
          {todo.text}
        </p>

        </div>
    <button onClick={() => deleteTodo(todo.id)} className={style.button}><CiCircleRemove size={30} /></button>    
    </li>
  )
}

export default Todo