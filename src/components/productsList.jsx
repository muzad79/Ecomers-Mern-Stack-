import React, { useEffect, useState } from 'react'

import Product from './Product';
import { Container, Spinner } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Header from './Header';

const ProductsList = ({user}) => {
    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{

        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data.products)
            setLoading(false)
            
        })


    },[])



  return (
    <>
    <Header products={products} setProducts={setProducts} user={user}/>
    {
    loading?<Spinner/>:
    <Container >
    <Row>
    {products.map((product)=>{
      return <Product key={product.id} product={product}/>
    }

    )
    }
    </Row>
    </Container>
}
    </>
    )
  
    
}

export default ProductsList