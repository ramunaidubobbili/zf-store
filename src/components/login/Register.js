import React, { useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import ServiceRequest from "../api/service";
import Header from "./Header";
import Input from './Input';

const Register = () => {
    const [fullname, setFullname]= useState("");
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [password, setPassword]= useState("");
    const [c_password, setConfirmPassword]= useState("");
    const [emailError, setEmailError]= useState("");
    const [fullnameError, setFullnameError]= useState("");
    const [phoneError, setPhoneError]= useState("");
    const [passwordError, setPasswordError]= useState("");
    const [alert, setAlert]= useState({message:"", type:""});
    const [usersData, setUsersData]= useState([]);
    const [isRegisted, setIsRegister]= useState(false);

    useEffect(() => {
        ServiceRequest.getUsersData()
        .then(response => {
            setUsersData(response.data);
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch(name){
            case 'fullname':
                setFullname(value);
            break;
            case 'email':
                setEmail(value);
            break;
            case 'phone':
                setPhone(value);
            break;
            case 'password':
                setPassword(value);
            break;
            case 'c_password':
                setConfirmPassword(value);
            break;
        }
    }

    const register = (e) => {
        let isValidEmail = emailValidation(email);
        let isValidFullname = fullnameValidation(fullname);
        let isValidPhone = phoneValidation(phone);
        let isValidPassword = passwordValidation(password, c_password);
        if( !isValidEmail && !isValidFullname && !isValidPhone && !isValidPassword){
            var data = {
                fullname: fullname,
                email: email,
                phone: phone,
                password: password
            };
            ServiceRequest.create(data)
            .then(response => {
                setIsRegister(true)
                setAlert({
                    message: "You're registered successfully",
                    type: 'success'
                })
                //this.props.fetchData()
                console.log(response.data);
            })
            .catch(e => {
                setIsRegister(true)
                setAlert({
                    message: "You're not registered, please try again",
                    type: 'error'
                })
                console.log(e);
            });
            setFullname("")
            setEmail("")
            setPhone("")
            setPassword("")
            setConfirmPassword("")
        }
        e.preventDefault()
    }

    const fullnameValidation = (name) => {
        if(name === "" || name.length < 3){
            setFullnameError("Full Name must be minimum 3 digits.");
            return true
        }
        setFullnameError("")
        return false;
    }

    const emailValidation = (email) => {
        const isAlreadyExist = usersData.map(item => item.email).includes(email);
        
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(isAlreadyExist){
            setEmailError("This email is already registered. Please try with another email.")
            return true;
        }
        else if(email === "" || !regex.test(email)){
            setEmailError("Email is not valid");
            return true;
        }
        setEmailError("")
        return false;
    }

    const phoneValidation = (num) => {
        if(num === "" || parseInt(num.length) !== 10){
            setPhoneError("Phone Number must be 10 digits.")
            return true
        }
        setPhoneError("")
        return false;
    }

    const passwordValidation = (pwd, c_pwd) => {
        if(pwd === "" || c_pwd === "" || pwd !== c_pwd){
            if(pwd === "" || c_pwd === ""){
                setPasswordError("Password must be minimum 3 digits");
            }
            else if(pwd !== c_pwd){
                setPasswordError("Password must match");
            }
            return true
        }
        setPasswordError("");
        return false;
    }

    const hideAlert = () => {
        setTimeout(() => {
            setAlert({
                message: '',
                type: ''
            })
        },1500)
    }

    if(isRegisted){
        return <Redirect to="/login"/>
    }
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center position-relative">
                    {alert.type !== "" && (
                        <div className={"fs-5 alert top-90 text-center col-md-5 position-absolute fade show " + (alert.type === "success" ? "alert-success" : "alert-danger") } role="alert">
                            {alert.message}
                            <span data-bs-dismiss="alert" aria-label="Close" onClick={hideAlert()}></span>
                        </div>
                    )}
                    <div className="col-sm-6 col-md-5 text-center">
                        <div className="shadow-sm p-4 mb-3 bg-body border card card-body">
                            <h5 className="mb-4 card-title">Create Account</h5>
                            <form noValidate="" autoComplete="off" className="form-inline">
                                <Input type="text" for_name_id='fullname' label="Full Name" value={fullname} error={fullnameError} handleChange={handleChange} />
                                <Input type="email" for_name_id='email' label="Email" value={email} error={emailError} handleChange={handleChange} />
                                <Input type="tel" for_name_id='phone' label="Phone Number" value={phone} error={phoneError} handleChange={handleChange} />
                                <Input type="password" for_name_id='password' label="Password" value={password} error={passwordError} handleChange={handleChange} />
                                <Input type="password" for_name_id='c_password' label="Confirm Password" value={c_password} error={passwordError} handleChange={handleChange} />
                                <div className="d-grid gap-2">
                                    <button type="submit" onClick={register} className="py-2 px-3 btn btn-primary" >Register</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            Already registered? <Link to="/login" className='link'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;