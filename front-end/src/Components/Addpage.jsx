import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Addpage = () => {
  const [inputData, setinputData] = useState({taskName:" ",dueDate:" ",isPersonal:" "})
  const [invalidData,setInvalidData]=useState({})
  const navigate=useNavigate()

  
  
  const collectData=(e)=>{
     const {name,value}=e.target
    setinputData({...inputData,[name]:value})
     console.log(inputData);
    
  }

  const validation=(values)=>{
    let error={}
    if(values.taskName===" "){
      error.taskName="Enter Task Title"
    }
    let currentDate=new Date()
    if(values.dueDate===" " && values.dueDate <currentDate){
      error.dueDate="Enter Valid Due Date for Your Task"
    }
    if(values.isPersonal===" "){
      error.isPersonal="Select Task Workspace"
    }
   return error;
  }
  const saveData=(e)=>{
    e.preventDefault();
     setInvalidData(validation(inputData))
    // console.log(Object.keys(invalidData));
    
     if(Object.keys(invalidData)===0){
      axios.post('http://localhost:2000/router/addTask',inputData).then((response)=>{
        console.log(response);
        navigate('/viewtask')
      })}
     
else{
   navigate('/')

}
      
  }
  return (
    <div className='bg-green-300 h-screen'>
      <div className='pt-16 pl-96'>
      <form className="w-full max-w-lg" onSubmit={saveData}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
        
      >
        Task
      </label>
      <span style={{color:"red"}}>{invalidData.taskName}</span>
      <input
        className="appearance-none block w-full text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-900"
        type="text"
        name='taskName'
        onChange={collectData}
        placeholder="Task"
      />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label
        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
      >
         Due Date
      </label>
      <span style={{color:"red"}}>{invalidData.dueDate}</span>
      <input
        className="appearance-none block w-full text-black border border-green-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-900"
        type="date"
        name='dueDate'
        onChange={collectData}
        placeholder="Date"
        id='txtDate'
        
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide border-green-500 text-black text-xs font-bold mb-2"
      >
        Decription
      </label>
      <textarea
        className="appearance-none block w-full text-black border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-900"
        placeholder="Decription"
        onChange={collectData}
        name='taskDescription'
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
        htmlFor="grid-state"
      >
        Workspace
      </label>
      <div className="relative">
      <span style={{color:"red"}}>{invalidData.isPersonal}</span>
        <select
          className="block appearance-none w-full border border-green-500 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-900"
          name='isPersonal'
          onChange={collectData}
          
        >
           <option defaultChecked>Workspace</option>
          <option value="Personal" >Personal</option>
          <option value="Official">Official</option>
        </select>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-40">
    <button className=' mt-8 px-4 py-1 border rounded-full text-sm bg-green-900 bord hover:bg-green-600'>
     Add Task </button>
      
    </div>
  </div>
</form>

      </div>
      <div>
            <button className=' mt-8 mx-96 px-4 py-1 border font-semibold rounded-full text-sm bg-green-500 bord hover:bg-green-900'>
             <a> <Link to={'/'}>Home</Link></a> </button>
            </div>
    </div>
  )
}

export default Addpage
