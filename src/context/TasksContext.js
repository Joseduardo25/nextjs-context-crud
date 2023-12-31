"use client"
import { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskContext = createContext()

export const useTask = () =>{
  const context = useContext(TaskContext)
  if(!context) throw new Error('useTask must used within a provider')
  return context
}

const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useState([])

  const createTask = (title, description) =>{
    setTasks([...tasks, {
      title,
      description,
      id: uuid()
    }])
  }
  const deleteTask = (id) =>{
    setTasks([...tasks.filter((task)=> task.id !== id)])
  }
  const updateTask = (id, newData) =>{
    setTasks([...tasks.map(task => task.id === id ? {...task, ...newData} : task)])
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider