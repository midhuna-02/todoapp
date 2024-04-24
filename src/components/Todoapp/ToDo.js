import React, { useState,useEffect } from 'react';
import "./Todo.css";
import AddTask from './AddTask';
import ListTask from './ListTask';

const ToDo = () => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    document.title=`you have ${task.length} task(s)`;
  })
  

  const addTask =(title)=>{
    
   const newTask=[...task, {title}];

   setTask(newTask);
  

  }
  const removeTask=(index)=>{
    const newTask=[...task];
    newTask.splice(index,1);
    setTask(newTask);
  }
  return (
    <>
    <div className='todo-container'>
        <div className='todo-header'>TODO APP</div>
        <div className='addtask' ><AddTask addTask={addTask}/></div>
        <div className='listtask'>{task.map((item,index)=>(
          <ListTask task={item} removeTask={removeTask} index={index} key={index}/>
        ))}</div>
    </div>
    </>
  )
}

export default ToDo