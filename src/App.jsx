import React, { useState, useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import Todo from "./components/Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `grid items-center justify-items-center h-screen w-screen p-4 bg-gradient-to-r from-indigo-500 to-blue-500 relative overflow-hidden`,
  imgBg: `w-[90%] h-[90%] rounded-[200px] absolute`,
  container: `bg-gray-100 max-w-[700px] w-full m-auto rounded-md shadow-xl p-4 absolute`,
  heading: `text-3xl font-bold text-center text-gray-800 p-4 mb-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-2 ml-2 bg-blue-500 text-slate-100`,
  count: `text-center p-2`,
};
import './App.css'
import logo from './assets/react.svg';

function App() {
  const [todos, setTodos] = useState([]);
  const[input, setInput] = useState('');


  //Create

  const createTodo = async (e) => {
    e.preventDefault(e);
    if(input===''){
      alert('Please enter a valid todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  }

  //Read
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr= [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //Update
  const toggleComplete = async (todo) => {

    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  //Delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <div className="App">
      <section className={style.bg} id="bg">
      <img className={style.imgBg} src={logo} id="imgRotate" />
      <div className={style.container}>

        <h3 className={style.heading}>TODO</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e)=>setInput(e.target.value)} className={style.input} type="text" placeholder="Add task" />
          <button className={style.button} >
            <BiAddToQueue size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <p className={style.count}>{todos.length<1?`You have any todos.`:`You have ${todos.length} todos.`}</p>

      </div>
      </section>
    </div>
  );
}

export default App;
