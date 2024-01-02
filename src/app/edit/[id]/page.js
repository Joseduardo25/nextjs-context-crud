"use client"
import { useRouter } from 'next/navigation'

const page = ({params}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return (
    <div>
      <h1>ID:{params.id}</h1>
      <button 
        className='bg-blue-600 py-2 px-3 rounded-lg mt-4'
        onClick={()=> router.push('/')}
      >
        Return
      </button>
    </div>
  )
}

export default page