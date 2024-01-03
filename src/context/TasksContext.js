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
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'First Task',
      description: 'Some Task 01'
    },
    {
      id: '2',
      title: 'Second Task',
      description: 'Some Task 02'
    },
    {
      id: '3',
      title: 'Third Task',
      description: 'Some Task 03'
    }
  ])

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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider