"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTask } from '@/context/TasksContext'

const page = ({params}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { tasks, createTask, updateTask } = useTask()
  const handleChange = (e) => setTask({...task,[e.target.name]: e.target.value})
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(params.id){
      console.log("EDITANDO")
      console.log(params.id, task)
      updateTask(params.id, task)
    }else{
      createTask(task.title, task.description)
    }
    router.push('/')
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    if(params){
      const taskFound = tasks.find( task => task.id === params.id)
      if (taskFound) setTask({
        title: taskFound.title,
        description: taskFound.description
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='h-screen flex items-center'>
      <form 
        className='flex flex-col  max-w-sm mx-auto bg-gray-700 rounded-lg py-10 px-5 text-black'
        onSubmit={handleSubmit}
        >
        <input
          name='title'
          placeholder='Escribe el Titulo'
          className='text-3xl font-semibold rounded-lg'
          onChange={handleChange}
          value={task.title}
        />
        <textarea 
          name='description'
          placeholder='Escribe la descripcion'
          className='mt-4 rounded-lg'
          onChange={handleChange}
          value={task.description}
          />
        <div className='flex gap-8'>
          <button 
            className='bg-green-600 py-3 rounded-lg mt-8 w-full text-white'
            >
              Save
          </button>
          <button
            className='bg-red-600 py-3 rounded-lg mt-8 w-full text-white'
            type='button'
            onClick={()=> router.push('/')}
            >
            Cancel
          </button>
        </div>
        <button
          className='bg-blue-600 py-3 rounded-lg mt-8 w-full text-white'
          type='button'
          onClick={()=> router.push('/')}
        >
          Return
        </button>
      </form>
    </div>
  )
}

export default page