import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function Header({products,setProducts,user}) {

    const token=localStorage.getItem("token")
    if(token){
        user=true;
    }



    function sortByPrice(){
        let arr=[...products]
      arr.sort((a , b)=>{
        

        return (a.price - b.price)

    

      }) 
      setProducts(arr)



    }

    function sortByBrand(){

       let arr= products.filter((product)=>{
            return (product.brand== "Apple")
        })
        setProducts(arr)
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to={"#"}><Nav.Link href="#link"> Cart</Nav.Link></Link>
            
            <NavDropdown title="Filter" id="basic-nav-dropdown">
             <button onClick={sortByPrice}><NavDropdown.Item href="#action/3.1"> By Price</NavDropdown.Item></button>
             <button onClick={sortByBrand}> <NavDropdown.Item href="#action/3.2">
                By Brand
              </NavDropdown.Item></button>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {user? <><Image style={{height:"40px",marginLeft:"500px"}} src="https://i.pinimg.com/1200x/97/86/3f/97863fa60e767e55d8d62e392a020d67.jpg" roundedCircle />
            <p>Adnan</p>
            </>

            
            :
            <Link style={{marginLeft:"500px"}} to={'/login'}><Nav.Link href="#link"> Login</Nav.Link></Link>
}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;