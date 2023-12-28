"use client"
import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTask = () =>{
  const context = useContext(TaskContext)
  if(!context) throw new Error('useTask must used within a provider')
  return context
}

const TasksProvider = ({children}) => {
  const tasks = []

  return (
    <TaskContext.Provider
      value={{tasks}}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider