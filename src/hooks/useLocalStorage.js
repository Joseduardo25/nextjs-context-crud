import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(initialState)

  useEffect(()=>{
    const item = localStorage.getItem(key)
    const tasks = JSON.parse(item)
    if(tasks){
      console.log("soy el primer IF")
      setState(tasks)
      console.log(tasks)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[state])
  return [state, setState]
}
