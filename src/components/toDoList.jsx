import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../features/todo/todoSlice'

const ToDoList = () => {
    const[input,setInput]=useState("")
    const dispatch=useDispatch()

    const addToDoHandler =(e)=>{
        e.preventDefault()
        dispatch(addToDo(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addToDoHandler}>
        <input type='text'  value={input} onChange={(e)=>{
            setInput(e.target.value)

        }}>
        
        </input>
        


    </form>
    

  
    </>

  )
  
}

export default ToDoList