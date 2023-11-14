import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <div className='p-2' style={{backgroundColor:'#08428c'}}>
            <Nav
      activeKey="/home"
      className='justify-content-end me-5'
    >
     
          <Nav.Item>
            <a className='text-white ms-5' style={{textDecoration:'none'}} href="home">Home</a>
          </Nav.Item>
      
    <Link to={'/add'} style={{textDecoration:'none'}}>
          <Nav.Item>
            <a className='text-white ms-5' style={{textDecoration:'none'}} >Add Employees</a>
          </Nav.Item>
    </Link>
      <Link to={'/employee-mng'} style={{textDecoration:'none'}}>
          <Nav.Item>
            <a className='text-white ms-5' style={{textDecoration:'none'}} >List Employees</a>
          </Nav.Item>
      </Link>
   
    </Nav>
    </div>
  )
}

export default AdminHeader