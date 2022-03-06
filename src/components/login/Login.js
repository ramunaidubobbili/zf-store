import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import Header from './Header';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userIdError, setUserIdError] = useState("");
    const [userPasswordError, setUserPasswordError] = useState("");
    // const token = localStorage.getItem("token");

    const handleChange = (e) => {
        const { name, value } = e.target
        if(name === "user_id"){
            setUserId(value);
        }
        if(name === "user_password"){
            setUserPwd(value);
        }
    }

    const login = (e) => {
        let isValidUserId = userNameValidation(userId);
        let isValidPassword = passwordValidation(userPwd);
        if(isValidUserId && isValidPassword){
        localStorage.setItem("token", "T");
        setIsLoggedIn(true);
        }
        (e).preventDefault();
    }

    const userNameValidation = (userid) => {
        if(userid !== ""){
        if(userid === "admin"){
            setUserIdError("");
            return true
        }
        setUserIdError("User id is incorrect.");
        return false
        }
        setUserIdError("User id is required.")
        return false
    }
    const passwordValidation = (pwd) => {
        if(pwd !== ""){
        if(pwd === "123"){
            setUserPasswordError("")
            return true
        }
        setUserPasswordError("User password is incorrect.");
        return false
        }
        setUserPasswordError("User password is required.");
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
                                    <input name="user_id" id="user_id" placeholder="User Name"  onChange={handleChange} className={"py-2 px-3 form-control " + (userIdError !== "" ? "is-invalid" : "")} />
                                    {userIdError !== "" && <div className='invalid-feedback text-start'>{userIdError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="user_password" className="visually-hidden">Password</label>
                                    <input type="password" name="user_password" id="user_password" placeholder="Password" onChange={handleChange} className={"py-2 px-3 form-control " + (userPasswordError !== "" ? "is-invalid" : "")}/>
                                    {userPasswordError !== "" && <div className='invalid-feedback text-start'>{userPasswordError}</div>}
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" onClick={login} className="py-2 px-3 btn btn-primary" >Login</button>
                                </div>
                            </form>
                        </div>
                        <i className="small text-secondry">Username === "admin" && Password === "123"</i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login