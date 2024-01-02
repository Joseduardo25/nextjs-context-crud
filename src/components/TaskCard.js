import { useRouter } from 'next/navigation'

export const TaskCard = ({id, title, description}) => {
  const router = useRouter()
  return (
    <div 
      className='m-10 bg-gray-700 rounded-lg max-w-xl mx-auto p-5'
      onClick={() => router.push(`/edit/${id}`)}
    >
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <button className='bg-red-600 py-2 px-3 rounded-lg mt-4'>
          Delete
        </button>
        <p className='mt-4'>{description}</p>
    </div>
  )
}
