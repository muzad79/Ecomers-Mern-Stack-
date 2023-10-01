import { Button } from 'bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToDo } from '../features/todo/todoSlice'

const ToDo1 = () => {
    const todos=useSelector((state)=>state.todos)
    const dispatch =useDispatch()
  return (
    <>
    {todos.map((todo)=>{
        return <> <span>{todo.name}</span>
        <button onClick={()=>{
            dispatch(removeToDo(todo.id))
        }}>Delete to do </button></>
    })}
   
    </>
    
  )
}

export default ToDo1