import BASE_URL from "./base_url"
import { commonStructure } from "./commonStructure"


//admin login

export const adminLoginApi=async(body)=>{
    return await commonStructure('POST',`${BASE_URL}/admin/login`,body)
}

//add employee

export const addEmployee=async(body,headers)=>{
         return await commonStructure('POST',`${BASE_URL}/admin/addemployee`,body,headers)
}

//get all employees

export const getAllEmployees=async(sdata)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-all-employees?search=${sdata}`,{})
}

//get employee
export const getEmployee=async(id)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/get-employee/${id}`,{})
}

//delete employee
export const deleteEmployee=async(id)=>{
    return await commonStructure('DELETE',`${BASE_URL}/admin/remove-employee/${id}`,{})
}

//update employee
export const updateEmployee=async(id,body,headers)=>{
    return await commonStructure('PUT',`${BASE_URL}/admin/update-employee/${id}`,body,headers)
}

//filter employyee

export const filterStatus=async(data)=>{
    return await commonStructure('GET',`${BASE_URL}/admin/filter?filterData=${data}`,{})
}