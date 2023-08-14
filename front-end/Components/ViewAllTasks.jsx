import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const ViewAllTasks = () => {
  const [upcomingTasks, setUpcomingTasks] = useState([])
   const navigate=useNavigate()

  useEffect(()=>{
       axios.get('http://localhost:2000/router/viewallTask').then((response)=>{
        setUpcomingTasks(response.data.data);
       })
  },[])

  const edit=(id)=>{
    navigate(`/editTask/${id}`)

  }

  const done=(id)=>{
    setUpcomingTasks(upcomingTasks.filter((t)=>t._id!==id))
    axios.post(`http://localhost:2000/router/done/${id}`).then((response)=>{
      console.log("ok");
    })
}
  return (
    <div className='bg-green-300 h-screen'>
        <div className=' mx-96'>
    <table className='border boredr-slate-200 border-separate border-spacing-2'>
  <thead>
    <tr><th className='border border-green-900'>Sl.No</th>
    <th className='border border-green-900'>Task</th>
    <th className='border border-green-900'>Workspace</th>
    <th className='border border-green-900'>Due Date</th>
    <th className='border border-green-900'>Issued From</th>
    <th className='border border-green-900'>Action</th></tr>
  </thead>
  <tbody>
    {upcomingTasks.map((data,key)=>(<tr>
    <td className='border border-green-900'>{key+1}</td>
  <td className='border border-green-900'>{data.task}</td>
  <td className='border border-green-900'>{data.workspace}</td>
  <td className='border border-green-900'>{data.date}</td>
  <td className='border border-green-900'>{data.adddate}</td>
  <td className='border border-green-900'>
    <button class="px-4 py-1 text-sm text-green-900 font-semibold rounded-full border border-green-200 hover:bg-green-600 hover:border-transparent"
    onClick={()=>{done(data._id)}}>Done</button>
    <button class="px-4 py-1 text-sm text-green-900 font-semibold rounded-full border border-green-200 hover:bg-green-600 hover:border-transparent"
    onClick={()=>{edit(data._id)}}>Edit</button></td></tr>
  ))}
  </tbody></table></div>
  <div>
            <button className=' mt-8 mx-96 px-4 py-1 border font-semibold rounded-full text-sm bg-green-500 bord hover:bg-green-900'>
             <a> <Link to={'/'}>Home</Link></a> </button>
            </div> </div>
  )
}

export default ViewAllTasks