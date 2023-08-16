import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"



const EditTask = () => {
  const {id}=useParams()
    const [inputData, setinputData] = useState({task:"",date:"",workspace:""})
  const [invalidData,setInvalidData]=useState({})
  
  const navigate=useNavigate()

  useEffect(()=>{
            axios.get(`http://localhost:2000/router/editTaskOld/${id}`).then((response)=>{
               setinputData(response.data.data)
            })
  },[])
  
  
  const collectData=(e)=>{
     const {name,value}=e.target
    setinputData({...inputData,[name]:value})
    
  }

  const validation=(data)=>{
    let error={}
    if(data.task===""){
      error.task="Enter Task Title"
    }
    let currentDate=new Date()
    if(data.date==="" && data.date <currentDate){
      error.date="Enter Valid Due Date for Your Task"
    }
    if(data.workspace===""){
      error.workspace="Select Task Workspace"
    }
   return error;
  }

  const saveData=(e)=>{
    e.preventDefault();
     setInvalidData(validation(inputData))
     if(invalidData){
      axios.post('http://localhost:2000/router/editTask',inputData).then((response)=>{
        navigate('/viewtask')
      })
     }
else{
 
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
      <span style={{color:"red"}}>{invalidData.task}</span>
      <input
        className="appearance-none block w-full text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-900"
        type="text"
        name='task'
        value={inputData.task}
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
      <span style={{color:"red"}}>{invalidData.date}</span>
      <input
        className="appearance-none block w-full text-black border border-green-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-900"
        type="date"
        name='date'
        value={inputData.date}
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
        name='description'
        value={inputData.description}
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
      <span style={{color:"red"}}>{invalidData.workspace}</span>
        <select
          className="block appearance-none w-full border border-green-500 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-900"
          onChange={collectData}
          name='workspace'
          value={inputData.workspace}
        >
           <option defaultChecked>Workspace</option>
          <option value="personal">Personal</option>
          <option value="official">Official</option>
        </select>
      </div>
    </div>
     
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-40">
    <button className=' mt-8 px-4 py-1 border rounded-full text-sm bg-green-900 bord hover:bg-green-600'>
     Update Task </button>
      
    </div>
  </div>
  
</form>

 <div>
<button className=' mt-8 mx-96 px-4 py-1 border font-semibold rounded-full text-sm bg-green-500 bord hover:bg-green-900'>
 <a> <Link to={'/'}>Home</Link></a> </button>
</div> </div>
    </div>
  )
}

export default EditTask
