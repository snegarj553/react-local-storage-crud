import React from "react";
import "./style.css";
import { useEffect, useState } from "react";


export default function App() {
  const [value, setValue] = useState("");
const [tasks,setTasks]=useState(()=>{
  const savedTodos = localStorage.getItem("todos");
  // if there are todos stored
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
}
);

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(tasks));
},[tasks])
  const handleSubmit = e => {
    e.preventDefault();
if(!value) return;
 setTasks([...tasks, value ]);
    setValue("");
    
  };
const deleteitem=(index)=>{
 const newtask=[...tasks];
 newtask.splice(index,1);
 setTasks(newtask);
}
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Enter the task..."
        onChange={e => setValue(e.target.value)}
      />
     {tasks.map((task, index) => <p  className="task"   onClick={()=>deleteitem(index)}>{task}</p>)}
    </form>
  )
}