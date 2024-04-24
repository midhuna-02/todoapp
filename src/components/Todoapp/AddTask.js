import React,{useState} from 'react'

const AddTask = ({addTask}) => {
  const [value, setValue] = useState("");
  const addItem=()=>{
    console.log(value);
   addTask(value);
   setValue("");
  }
  return (
   <>
   <div className='input-container'> 
    <input className='input' type='text' placeholder='Add a new Task' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
   <button className='addbutton' onClick={addItem}>ADD</button>
   </div>
   </>
  )
}

export default AddTask