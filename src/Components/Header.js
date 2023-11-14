import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="" style={{backgroundColor:'#08428c'}}>
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="https://i.postimg.cc/Wz1rg82G/Pngtree-office-meeting-730259.png"
              width="75"
              height="50"
              className="d-inline-block align-top"
            />
          <b className='fs-3 text-white  '>  Employee Desk</b> 
          </Navbar.Brand>
        </Container>
      </Navbar>  

    </div>
  )
}

export default Header