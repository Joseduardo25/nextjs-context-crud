"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter()
  return (
    <header>
      <Link href='/'>
        <h1 className='font-semibold text-3xl'>
          TASK APP
        </h1>
      </Link>
      <div>
        <button
          onClick={()=> router.push('/new')}
        >Add Task</button>
      </div>
    </header>
  )
}