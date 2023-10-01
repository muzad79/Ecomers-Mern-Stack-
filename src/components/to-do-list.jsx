import React, { useReducer, useState } from 'react'
import Todo from './todo'


function reducer(todos,action){
    switch(action.type){
        case "addToDo":
            return [...todos,newToDo(action.payload.name)]
        case "toggleToDo":
           return todos.map((todo)=>{
                if(todo.id==action.payload.id){
                    return {...todo,complete:!todo.complete}
                }
                return todo
            })
        case "deleteTodo":
            return todos.filter((todo)=>{
                return todo.id!=action.payload.id
            })
        default :
            return todos
    }


}
function newToDo(name){
    return {
        id:Date.now(),
        name:name,
        complete:false
    }

}

export const ToDoList = () => {
    const[todos,dispatch]=useReducer(reducer,[])
    const [name,setName] =useState("")

    function addToDo(e){
        e.preventDefault()
        dispatch({type:"addToDo",payload:{name:name}})
        setName("")
    }
    console.log(todos)

    
  return (
    <>
    <form onSubmit={addToDo}>
        <input type='text'  value={name} onChange={(e)=>{
            setName(e.target.value)

        }}>
        
        </input>
        


    </form>
    {todos.map((todo)=>{
       return   <Todo key={todo.id} dispatch={dispatch} todo={todo}/>
    })}

  
    </>

  )
}

