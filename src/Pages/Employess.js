import React, { useContext, useEffect, useState } from 'react'
import TableContent from './TableContent'
import {  Alert, FloatingLabel, Form } from 'react-bootstrap'
import { registerContext, updateContext } from './ContextShare'
import { deleteEmployee, filterStatus, getAllEmployees } from '../services/allApis'
import AdminHeader from '../Components/AdminHeader'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Employess() {
  const {registerUpdate,setRegisterUpdate}=useContext(registerContext)
  const {updateEdit,setEditUpdate}=useContext(updateContext)


  const [employees,setEmployees]=useState([])
  const[searchData,setSearchData]=useState("")

  const getEmployees=async()=>{
    const result=await getAllEmployees(searchData)
    setEmployees(result.data);
  }

  //delete function
  const removeEmployee=async(id)=>{
    const result=await deleteEmployee(id)
    if(result.status>=200 && result.status<300){
      getEmployees()
    }
  }

  const filterEmployees=async(data)=>{
    const result=await filterStatus(data)
    setEmployees(result.data);
  }

  useEffect(()=>{
    getEmployees()
  },[searchData])

  return (
    <div>
      <AdminHeader></AdminHeader>
      {registerUpdate?
       <Alert  variant={"success"} dismissible onClose={()=>setRegisterUpdate("")} >
        {registerUpdate} is added successfully
     </Alert>
     :"" }

     {updateEdit?
     <Alert  variant={"success"} dismissible onClose={()=>setEditUpdate("")} >
     {updateEdit.fname+" "+updateEdit.lname} profile is updated
  </Alert>
  :""
     }

<div className="  mt-5 w-25 ps-5">
      <FloatingLabel
        controlId="floatingInput"
        className=" mb-3 border shadow rounded"
        label="Search Employee"
       
      >
      <Form.Control onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="employee name"/>
       
      </FloatingLabel>
    </div>
  <div className='text-end p-5'>
    <h6 className='me-4 mb-2'>Filter Employees</h6>
      <ButtonGroup aria-label="Basic example">
        <Button onClick={()=>filterEmployees("active")} variant="success">Active</Button>
        <Button onClick={()=>filterEmployees("inactive")} variant="warning">Inactive</Button>
        <Button onClick={getEmployees} variant="info">All</Button>

       
      </ButtonGroup>
  </div>
      <TableContent deleteEmp={removeEmployee} empArray={employees}></TableContent>
      

    </div>
  )
}

export default Employess