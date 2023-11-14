import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEmployee, getEmployee, updateEmployee } from '../services/allApis';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import AdminHeader from '../Components/AdminHeader';
import BASE_URL from '../services/base_url';
import { updateContext } from './ContextShare';

function Edit() {
    //state for validation
    const [fnameValid, setfnameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [lnameValid, setlnameValid] = useState(true)
    const [mobileValid, setmobileValid] = useState(true)
    const [locationValid, setlocationValid] = useState(true)

    const navigate = useNavigate()

    //state to hold  error message from backend
    const [errorMsg, setErrorMsg] = useState("")

    //context
    const{setEditUpdate}=useContext(updateContext)



    //state to hold form inputs
    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        gender: "",
        status: "",
        location: ""
    })

    const {id}=useParams()

    //function to get data of particular employee
    const getEmployeeData=async()=>{
        const result=await getEmployee(id)
        setInputs(result.data);
    }

    useEffect(()=>{
        getEmployeeData()
    },[])

    const setData = (e) => {
        const { value, name } = e.target
        if (name == 'fname') {
            if (value.match(/^[a-zA-Z ]*$/)) {
                setfnameValid(true)
                setInputs({ ...inputs, [name]: value })
            }
            else {
                setfnameValid(false)
            }
        }
        if (name == 'email') {
            if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setEmailValid(true)
                setInputs({ ...inputs, [name]: value })
            }
            else {
                setEmailValid(false)
            }
        }
        if (name == 'lname') {
            if (value.match(/^[a-zA-Z ]*$/)) {
                setlnameValid(true)
                setInputs({ ...inputs, [name]: value })
            }
            else {
                setlnameValid(false)
            }
        }
        if (name == 'mobile') {
            if (value.match(/^\*[0-9]{10,12}$/)) {
                setmobileValid(true)
                setInputs({ ...inputs, [name]: value })
            }
            else {
                setmobileValid(false)
            }
        }
        if (name == 'location') {
            if (value.match(/^[a-zA-Z0-9 ]*$/)) {
                setlocationValid(true)
                setInputs({ ...inputs, [name]: value })
            }
            else {
                setlocationValid(false)
            }
        }
        if (name == 'gender' || name == "status") {
            setInputs({ ...inputs, [name]: value })
        }


    }

    // state to store images
    const [image, setImage] = useState("")

    const imageChoose = (e) => {
        setImage(e.target.files[0]);
    }

    // state to hold image preview url
    const [imgPreview, setImgPreview] = useState("")

    useEffect(() => {
        if (image) {
            setImgPreview(URL.createObjectURL(image));
        }
    }, [image])

    console.log(inputs);

    const handleAdd = async (e) => {
        e.preventDefault()
        const { fname, lname, email, mobile, gender, location, status } = inputs
        if (fname == "") {
            toast.error('please enter first name')
        }
        else if (lname == "") {
            toast.error('please enter last name')
        }
        else if (email =="") {
            toast.error('please enter email')
        }
        else if (mobile == "") {
            toast.error('please enter mobile')
        }
        else if (gender == "") {
            toast.error('please choose gender')
        }
        else if (location == "") {
            toast.error('please enter location')
        }
        else if (status == "") {
            toast.error('please choose status')
        }
        else if (image == "") {
            toast.error("please choose image")
        }
        else {
            //header (the body data contain file type content)
            const headerConfig = {
                "Content-Type": "multipart/form-data"
            }
            //body data as formData
            const data = new FormData()

            //append
            data.append("fname", fname)
            data.append("lname", lname)
            data.append("email", email)
            data.append("mobile", mobile)
            data.append("gender", gender)
            data.append("location", location)
            data.append("status", status)
            data.append("user_profile", image?image:inputs.profile)

            //api
            const result = await updateEmployee(id,data, headerConfig)
            if (result.status >= 200 && result.status < 300) {
             
                //reset image state
                setImage("")

            setEditUpdate(result.data)
            
                //redirect to list of employee page
                navigate('/employee-mng')
            }
            else {
                setErrorMsg(result.response.data)
            }
        }

    }

    return (
        <div>
            <AdminHeader></AdminHeader>

            <div className='bg-white py-5'>

                {
                    errorMsg ? (
                        <Alert variant={"danger"} dismissible onClose={() => setErrorMsg("")}>
                            {errorMsg}
                        </Alert>)
                        : ""
                }

                <h1 style={{ color: "#08428c" }} className='text-center mt-3'>Edit Employee</h1>

                <Form className='container mt-2 shadow w-75 p-5'>
                    <div class='p-2 text-center'>
                        <img id='d' class="rounded-circle" style={{ height: '150px', width: '15%' }}
                            src={imgPreview ? imgPreview : `${BASE_URL}/uploads/${inputs.profile}`} alt="" />
                    </div>


                    <FormGroup controlId="fname">
                        <FormLabel>First Name</FormLabel>
                        <FormControl
                        value={inputs.fname}
                            onChange={(e) => setData(e)}
                            name='fname'
                            type="text"
                            required
                            placeholder="Enter first name"
                        />
                        {!fnameValid &&
                            <div>
                                <p className='text-danger'>* include valid characters</p>
                            </div>
                        }
                    </FormGroup>

                    <FormGroup controlId="lname">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl
                        value={inputs.lname}
                            onChange={(e) => setData(e)}
                            name='lname'
                            required
                            type="text"
                            placeholder="Enter last name"
                        />
                        {!lnameValid &&
                            <div>
                                <p className='text-danger'>* include valid characters</p>
                            </div>

                        }
                    </FormGroup>

                    <FormGroup controlId="email">
                        <FormLabel>Email address</FormLabel>
                        <FormControl
                        value={inputs.email}
                            onChange={(e) => setData(e)}
                            name='email'
                            required
                            type="email"
                            placeholder="Enter email"
                        />
                        {!emailValid &&
                            <div>
                                <p className='text-danger'>*invalid email</p>
                            </div>}
                    </FormGroup>

                    <FormGroup controlId="mobile">
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl
                         value={inputs.mobile}
                            onChange={(e) => setData(e)}
                            name='mobile'
                            required
                            type="tel"
                            placeholder="Enter mobile number"
                        />
                        {!mobileValid &&
                            <div>
                                <p className='text-danger'>* include min 10 digits</p>
                            </div>
                        }
                    </FormGroup>

                    <FormGroup controlId="gender">
                        <FormLabel>Gender</FormLabel>
                        <FormControl
                        value={inputs.gender}
                            onChange={(e) => setData(e)}
                            name='gender'
                            as="select"

                        >
                            <option value="">Select gender</option>
                            <option checked={inputs.gender=='male'?true:false} value={'male'}>Male</option>
                            <option checked={inputs.gender=='female'?true:false}value={'female'}>Female</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="status">
                        <FormLabel>Employee Status</FormLabel>
                        <FormControl
                         value={inputs.status}
                            onChange={(e) => setData(e)}
                            as="select"
                            name='status'


                        >
                            <option value="">Select status</option>
                            <option  value={'active'}>Active</option>
                            <option value={'inactive'}>Inactive</option>
                        </FormControl>
                    </FormGroup>


                    <FormGroup controlId="profile">
                        <FormLabel>Profile Picture</FormLabel>
                        <FormControl
                            onChange={(e) => imageChoose(e)}
                            name='profile'
                            required
                            type="file"
                            accept="image/*"
                        />
                    </FormGroup>



                    <FormGroup controlId="location">
                        <FormLabel>Location</FormLabel>
                        <FormControl
                         value={inputs.location}
                            onChange={(e) => setData(e)}
                            name='location'
                            required
                            type="text"
                            placeholder="Enter employee location"

                        />
                        {!locationValid &&
                            <div>
                                <p className='text-danger'>* include valid characters</p>
                            </div>
                        }
                    </FormGroup>

                    <div className="text-center mt-3 ">
                        <Button onClick={(e) => handleAdd(e)} variant="primary" className='w-50' type="submit">
                            Update
                        </Button>
                    </div>
                </Form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Edit