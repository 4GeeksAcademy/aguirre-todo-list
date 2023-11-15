import React, { useState } from "react";
const Home = () => {
  const [todoList, setTodoList] = useState(["example 1", "example 2"]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="text-center">
      <h1>TO-DO LIST</h1>
      <input type="text" placeholder="write your to-dos here" />
      <div>
        {todoList.map((item, index) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
