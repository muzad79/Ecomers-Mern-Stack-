import React from 'react'

const Todo = ({dispatch,todo}) => {
  return (
    <>

    <span style={{color: todo.complete?"green":"red"}}>{todo.name}</span>
    <button onClick={()=>{
        dispatch({type:"toggleToDo",payload:{id:todo.id}})
    }}>Toggle</button>
    <button onClick={()=>{
        dispatch({type:"deleteTodo" ,payload:{id:todo.id}})
    }}>Delete</button>
    </>
    
  )
}

export default Todo