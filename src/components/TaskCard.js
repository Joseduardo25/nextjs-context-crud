import { useRouter } from 'next/navigation'
import { useTask } from '@/context/TasksContext'

export const TaskCard = ({id, title, description}) => {
  const router = useRouter()
  const {deleteTask} = useTask()
  return (
    <div 
      className='m-10 bg-gray-700 rounded-lg max-w-xl mx-auto p-5'
      // onClick={() => router.push(`/edit/${id}`)}
    >
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <div className=' flex gap-5'>
          <button 
            className='bg-red-600 py-2 px-3 rounded-lg mt-4'
            onClick={(e) => {
              e.stopPropagation()
              deleteTask(id)
            }}
          >
            Delete
          </button>
          <button 
            className='bg-blue-600 py-2 px-6 rounded-lg mt-4'
            onClick={()=> router.push(`/edit/${id}`)}
          >
            Edit
          </button>
        </div>
        <p className='mt-4'>{description}</p>
    </div>
  )
}
