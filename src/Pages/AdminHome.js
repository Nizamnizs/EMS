import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { Link } from 'react-router-dom'
import AdminHeader from '../Components/AdminHeader'


function AdminHome() {
  return (
    <div className='mt-6 pb-5'>
      <AdminHeader></AdminHeader>
      <Row id='home'>

        <Col>
          <h1 className='p-5'
            id='title'>Your Next Performance Management Platform</h1>

          <p className='text-dark fs-3 ps-5'>The Employee Desk Is Designed To Integrate All Of these Necessory Elements</p>
        </Col>
        <Col>
          <img className='w-75' src="https://i.postimg.cc/P5w3t2rY/group-working-1-1.gif" alt="" />
        </Col>
      </Row>


      <Container>
        <Row className='p-5 bg-white ms-6 mt-5'>
          <h1 className='text-center' style={{color:'blue'}}>Makes Employee Management Easy </h1>
          <Col lg={6} className='text-center mt-4'>
          <Link to={'/add'} style={{textDecoration:'none'}}>
              <Card id='c1' style={{ width: '50%',marginLeft:'50%'} } className='border shadow'>
                <Card.Img  variant='top' style={{height:"300px"}} src='https://i.postimg.cc/0rg9YTs8/spreadsheet-discussion.gif'></Card.Img>
                <Card.Body>
                  <Card.Text>
                    <h3 className='p-2 mt-3'>Add new Employee</h3>
                    <p className=''>Add New Employee </p>
                  </Card.Text>
                  <Button className='primary' >Add New Employee</Button>
                </Card.Body>
              </Card>
          </Link>
          </Col>

          <Col lg={6} className='text-center mt-4'>
          <Link to={'/employee-mng'} style={{textDecoration:'none'}}>
              <Card id='c1' style={{ width: '50%'}} className='border shadow'>
                <Card.Img  variant='top' style={{height:"300px"}}  src='https://i.postimg.cc/tRMytjgp/Pulse-Motivation-Employee-engagement-strategy.gif'></Card.Img>
                <Card.Body>
                  <Card.Text>
                    <h3 className='p-2 mt-3'>Manage Employee</h3>
                    <p className=''>Manage Current Employee</p>
                  </Card.Text>
                  <Button className='primary' >Manage Employee</Button>
                </Card.Body>
              </Card>
          </Link>
          </Col>
        </Row>
      </Container>
      <p></p>
    </div>
  )
}

export default AdminHome