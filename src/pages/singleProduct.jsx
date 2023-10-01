import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const SingleProduct = () => {
    let [product,setProduct]= useState([])
    let params=useParams();

    useEffect(()=>{
       
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then((response)=>response.json())
        .then((data)=>{
            setProduct(data)
            
        })


    },[])
  return (
    <>
    <Header/>
   
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.thumbnail} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Link to={`./${product.id}`}><Button variant="primary">Add to Cart</Button></Link>
    </Card.Body>
  </Card>
  </>
  )
}

export default SingleProduct