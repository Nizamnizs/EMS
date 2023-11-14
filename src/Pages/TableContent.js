import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import BASE_URL from '../services/base_url';
import { Link } from 'react-router-dom';

function TableContent({ empArray,deleteEmp }) {
    return (
        <div className='pb-5 mb-5'>
            {
                empArray.length > 0 ?
                    <div>
                        <h2 style={{ color: 'blue' }} className='text-center m-5'>List Of Employees</h2>
                        <Table className='container w-75 shadow my-5' striped bordered hover variant='white'>
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Status</th>
                                    <th>Profile</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empArray.map((i,index)=>
                                    <tr>
                                    <td>{index+1}</td>
                                    <td>{i.fname+" "+i.lname}</td>
                                    <td>{i.mobile}</td>
                                    <td className='text-center'>
                                        <Button variant={i.status=="active"?"success":"warning"} className='text-center rounded p-2 w-75 container'>{i.status} </Button>
                                    </td>
                                    <td className='text-center'>
                                        <img style={{ width: '50px',height:'60px' }} className='rounded-4' src={`${BASE_URL}/uploads/${i.profile}`} alt="" />
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className='w-100'>
                                                <i class="fa-solid fa-list fa-fade"></i>

                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                               <Link to={`/view/${i._id}`} style={{textDecoration:'none'}}> <Dropdown.Item href="#/action-1"><i class="fa-solid fa-chalkboard-user me-5"></i>View</Dropdown.Item></Link>
                                                <Link to={`/edit/${i._id}`} style={{textDecoration:'none'}}><Dropdown.Item href="#/action-2"><i class="fa-solid fa-user-pen me-5"></i>Edit</Dropdown.Item></Link>
                                                <Dropdown.Item onClick={()=>deleteEmp(i._id)}><i class="fa-solid fa-user-xmark me-5"></i>Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>

                                    )
                                }

                             
                            </tbody>
                        </Table>
                    </div>
                    : <h1 className='text-center'>No Employees Added Yet!</h1>
            }

        </div>
    )
}

export default TableContent