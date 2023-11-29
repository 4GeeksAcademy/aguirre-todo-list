import React, { useState } from "react";
const Home = () => {
  const [todoList, setTodoList] = useState(["example 1", "example 2"]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = (e)=>{
    if (e.key=="Enter"&&inputValue !=""){
      setTodoList (todoList.concat(inputValue))
      setInputValue("")
    }
  }
  const deleteTodo = (index)=>{
    let newTodoList = todoList.filter ((item,idx)=>idx != index)
    setTodoList(newTodoList)
  }
  return (
    <div className="text-center">
      <h1>TO-DO LIST</h1>
      <input onKeyPress={e=>addTodo(e)} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="write your to-dos here" />
      <ul class="list-group">
        {todoList.map((item, index) => {
          return (
          <li class="list-group-item">{item}<span className="ms-1" onClick={()=>deleteTodo(index)}><i class="fa-solid fa-trash"></i></span></li>
      )
        })}
        <li class="list-group-item">
        {todoList.length==1? todoList.length+" item left":todoList.length+" items left"} 
        </li>
      </ul>
    </div>
  );
};

export default Home;
