"use client"
import { useTask } from '@/context/TasksContext'
import { TaskCard } from '@/components/TaskCard'
import { useRouter } from 'next/navigation'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {tasks} = useTask()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return (
    <div className='max-w-xl mx-auto'>
      {tasks.map(({id, title, description}, index)=>(
        <TaskCard key={index} id={id} title={title} description={description}/>
      ))}
      <button 
        onClick={()=> router.push('/new')}
        className='bg-green-600 py-3 rounded-lg my-8 w-full'
      >
        ADD TASK
      </button>
    </div>
  )
}

export default page