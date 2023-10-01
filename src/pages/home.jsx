import React, { useState } from 'react'
import Header from '../components/Header'
import ProductsList from '../components/productsList'

const Home = () => {

    const[user,setUser]=useState(false)
  return (
    <div>
       
        <ProductsList user={user}/>

        home
    </div>
  )
}

export default Home