/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTask } from '@/context/TasksContext'
import { useForm } from 'react-hook-form'

const page = ({params}) => {
  const router = useRouter()
  const { register, handleSubmit, setValue, formState: {
    errors
  } } = useForm()
  const { tasks, createTask, updateTask } = useTask()
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
    } else {
      createTask(data.title, data.description)
    }
    router.push('/')
  })
  
  useEffect(()=>{
    if(params){
      const taskFound = tasks.find( task => task.id === params.id)
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='h-screen flex items-center'>
      <form 
        className='flex flex-col  max-w-sm mx-auto bg-gray-700 rounded-lg py-10 px-5 text-black'
        onSubmit={onSubmit}
        >
        <input
          placeholder='Escribe el Titulo'
          className='text-3xl font-semibold rounded-lg'
          {...register("title",{ required: true })}
        />
        {errors.title && (<span>Este campo es requerido</span>)}
        <textarea 
          placeholder='Escribe la descripcion'
          className='mt-4 rounded-lg'
          {...register("description", { required: true })}
        />
        {errors.description && (<span>Este campo es requerido</span>)}
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