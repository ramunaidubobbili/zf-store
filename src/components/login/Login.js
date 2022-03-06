import React, {useEffect, useState} from 'react';
import { Redirect, Link } from "react-router-dom";
import Header from './Header';
import ServiceRequest from "../api/service";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usersData, setUsersData] = useState([]);
    // const token = localStorage.getItem("token");

    useEffect(() => {
        ServiceRequest.getUsersData()
        .then(response => {
            setUsersData(response.data)
            //console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value);
        }
    }

    const getUserData = (data, email) => {
        let existData = {};
        for(let i = 0; i < data.length; i++){
            if(data[i].email === email){
                existData = data[i]
            }    
        } 
        return existData;
    }

    const login = (e) => {
      let isValidEmail = emailValidation(email, usersData);
      let isValidPassword = passwordValidation(email, password, usersData);

      if(isValidEmail && isValidPassword){
        let getUser = getUserData(usersData, email);
        // console.log("Users Details", getUser)
        localStorage.setItem("userDetails", JSON.stringify(getUser));
        // console.log("Users Details Session", localStorage.getItem("userDetails"))
        localStorage.setItem("token", getUser.id+getUser.phone);
        setIsLoggedIn(!isLoggedIn)
      }
      e.preventDefault();
    }

    const emailValidation = (email, data) => {
      if(email !== ""){
        let getUser = getUserData(data, email);
        if(getUser.length !== 0 && email === getUser.email){
          setEmailError("")
          return true
        }
        setEmailError("Email is incorrect.")
        return false
      }
      setEmailError("Email is required.")
      return false
    }

    const passwordValidation = (email, pwd, data) => {
      if(pwd !== ""){
        let getUser = getUserData(data, email);
        if(getUser.length !== 0 && email === getUser.email && pwd === getUser.password){
            setPasswordError("");
          return true
        }
        setPasswordError("Password is incorrect.");
        return false
      }
      setPasswordError("Password is required.")
      return false
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-sm-6 col-md-5 text-center">
                        <div className="shadow-sm p-4 mb-3 bg-body border card card-body">
                            <h5 className="mb-4 card-title">Login</h5>
                            <form noValidate="" autoComplete="off" className="form-inline">
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="user_id" className="visually-hidden">Username</label>
                                    <input name="email" id="email" placeholder="Email"  onChange={handleChange} className={"py-2 px-3 form-control " + (emailError !== "" ? "is-invalid" : "")} />
                                    {emailError !== "" && <div className='invalid-feedback text-start'>{emailError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="user_password" className="visually-hidden">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
                                    {passwordError !== "" && <div className='invalid-feedback text-start'>{passwordError}</div>}</div>
                                <div className="d-grid gap-2">
                                    <button type="submit" onClick={login} className="py-2 px-3 btn btn-primary" >Login</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            Not yet registered? <Link to="/register" className='link'>Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;