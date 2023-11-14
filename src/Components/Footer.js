import React from 'react'
import { Button, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'

function Footer() {
  return (
<footer className="text-light p-4" style={{ backgroundColor: '#08428c' }}>
    <Container>
      <Row>
        <Col md={6}>
          <Image
            src="https://i.postimg.cc/Wz1rg82G/Pngtree-office-meeting-730259.png"
            width="200px"
            height="200px"
            alt="Company Logo"
            fluid
          />
        </Col>
        <Col md={6} className="text-md-right">
          <div>
            <h2>Employee Desk</h2>
            <p>Company Address</p>
            <p>Phone Number</p>
            <p>Email Address</p>
            <p>Website</p>
          </div>
          <div className="mt-3">
            {/* Social media icons */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="mr-3 text-white" size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-3 ms-2 text-white" size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className='mr-3 ms-2 text-white' size={30}  />
            </a>
          </div>
          <div className="mt-3">
            {/* Email subscription */}
            <InputGroup>
              <FormControl placeholder="Enter your email" />
                <Button variant="primary">Subscribe</Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>  )
}

export default Footer