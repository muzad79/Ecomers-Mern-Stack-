import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SingleProduct from './pages/singleProduct'
import Registration from './pages/registration'
import ToDoList from './components/toDoList'
import ToDo1 from './components/toDo1'

const App = () => {
  return (

    <>
    <ToDoList/>
    <ToDo1/>
    </>
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Home/>}/>
    //       <Route path='/:id' element={<SingleProduct/>}/>
    //       <Route path='/login' element={<Login/>}/>
    //       <Route path='/register' element={<Registration/>}/>
    //     </Routes>
      
    //   </BrowserRouter>

    // </div>
  )
}

export default App