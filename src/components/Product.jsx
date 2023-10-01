import React from 'react'
import {Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
  return (
    <Card style={{ width: '18rem', margin:'10px',height:"400px"}}>
    <Card.Img style={{height:"200px"}} variant="top" src={product.thumbnail} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Link to={`./${product.id}`}><Button variant="primary">Details</Button></Link>
    </Card.Body>
  </Card>
  )
}

export default Product