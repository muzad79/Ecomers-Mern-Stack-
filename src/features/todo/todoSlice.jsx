import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const  toDoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{

        addToDo:(state,action)=>{
            const newToDo={
                id:nanoid(),
                name:action.payload
            }
            state.todos.push(newToDo)

        },
        removeToDo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                return todo.id != action.payload
            })
        }
    }

})
 export const {addToDo,removeToDo} =toDoSlice.actions

 export default toDoSlice.reducer