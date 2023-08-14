import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const History = () => {
   const [doneTask, setDoneTask] = useState([])
  useEffect(()=>{
       axios.get('http://localhost:2000/router/completedTask').then((response)=>{
        setDoneTask(response.data.data);
       })
  },[])
  return (
    <div className='bg-green-300 h-screen'>
      <div className="mx-96">
      <table className='border boredr-slate-200 border-separate border-spacing-2'>
    <thead>
      <tr><th className='border border-green-900'>Sl.No</th>
      <th className='border border-green-900'>Task</th>
      <th className='border border-green-900'>Workspace</th>
      <th className='border border-green-900'>Due Date</th>
      <th className='border border-green-900'>Status</th>
      <th className='border border-green-900'>Issued from</th></tr>
    </thead>
    <tbody>
      {doneTask?.map((data,key)=>(<tr>
        <td className='border border-green-900'>{key+1}</td>
    <td className='border border-green-900'>{data.task}</td>
    <td className='border border-green-900'>{data.workspace}</td>
    <td className='border border-green-900'>{data.date}</td>
    <td className='border border-green-900'>{data.taskstatus}</td>
    <td className='border border-green-900'>{data.adddate}</td></tr>
    ))}</tbody></table></div>  <div>
    <button className=' mt-8 mx-96 px-4 py-1 border font-semibold rounded-full text-sm bg-green-500 bord hover:bg-green-900'>
     <a> <Link to={'/'}>Home</Link></a> </button>
    </div></div>
  )
}

export default History