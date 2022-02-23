import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import ServiceRequest from "../api/service";
import Header from "./header";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fullname: '',
            email: '',
            phone: '',
            password:'',
            c_password: '',
            emailError: '',
            fullnameError: '',
            phoneError: '',
            passwordError: '',
            alert: {
                message: '',
                type: ''
            },
            usersData: [],
            isRegisted: false
        }
    }

    componentDidMount(){
        this.getRegisteredUsers();
    }

    getRegisteredUsers = () => {
        ServiceRequest.getUsersData()
        .then(response => {
            this.setState({
                usersData: response.data
            });
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    register = (e) => {
        let isValidEmail = this.emailValidation(this.state.email);
        let isValidFullname = this.fullnameValidation(this.state.fullname);
        let isValidPhone = this.phoneValidation(this.state.phone);
        let isValidPassword = this.passwordValidation(this.state.password, this.state.c_password);
        if( !isValidEmail && !isValidFullname && !isValidPhone && !isValidPassword){
            var data = {
                fullname: this.state.fullname,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password
            };
            ServiceRequest.create(data)
            .then(response => {
                this.setState({
                    isRegisted: true,
                    alert: {
                        message: "You're registered successfully",
                        type: 'success'
                    }
                });
                //this.props.fetchData()
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    isRegisted: false,
                    alert: {
                        message: "You're not registered, please try again",
                        type: 'error'
                    }
                })
            });
            this.setState({
                fullname: "",
                email: "",
                phone: "",
                password: "",
                c_password: ""
            });
        }
        e.preventDefault()
    }

    fullnameValidation = (name) => {
        let fullnameError = "";
        if(name === "" && name.length < 3){
            this.setState({
                fullnameError: "Full Name must be minimum 3 digits."
            })
            return true
        }
        this.setState({
            fullnameError: fullnameError
        })
        return false;
    }

    emailValidation = (email) => {
        let emailError = "";
        const isAlreadyExist = this.state.usersData.map(item => item.email).includes(email);
        
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(isAlreadyExist){
            this.setState({
                emailError: "This email is already registered. Please try with another email."
            });
            return true;
        }
        else if(email === "" || !regex.test(email)){
            this.setState({
                emailError: "Email is not valid"
            });
            return true;
        }
        this.setState({
            emailError: emailError
        });
        return false;
    }

    phoneValidation = (num) => {
        let phoneError = "";
        if(num === "" || parseInt(num.length) !== 10){
            this.setState({
                phoneError: "Phone Number must be 10 digits."
            })
            return true
        }
        this.setState({
            phoneError: phoneError
        })
        return false;
    }

    passwordValidation = (pwd, c_pwd) => {
        let passwordError="";
        if(pwd === "" || c_pwd === "" || pwd !== c_pwd){
            if(pwd === "" || c_pwd === ""){
                passwordError = "Password must be minimum 3 digits"
            }
            else if(pwd !== c_pwd){
                passwordError = "Password must match"
            }
            this.setState({
                passwordError: passwordError
            })
            return true
        }
        this.setState({
            passwordError: passwordError
        })
        return false;
    }

    hideAlert = () => {
        setTimeout(() => {
            this.setState({
                alert: {
                    message: '',
                    type: ''
                }
            })
        },1500)
    }

    render() {
        const {emailError, fullnameError, phoneError, passwordError, alert, fullname, email, phone, password, c_password, isRegisted} = this.state;
        if(isRegisted){
            <Redirect to="/login"/>
        }
        return (
            <>
                <Header/>
                <div className="container">
                    <div className="row vh-100 justify-content-center align-items-center position-relative">
                        {alert.type !== "" && (
                            <div className={"fs-5 alert top-90 text-center col-md-5 position-absolute fade show " + (alert.type === "success" ? "alert-success" : "alert-danger") } role="alert">
                                {alert.message}
                                <span data-bs-dismiss="alert" aria-label="Close" onClick={this.hideAlert()}></span>
                            </div>
                        )}
                        <div className="col-sm-6 col-md-5 text-center">
                            <div className="shadow-sm p-4 mb-3 bg-body border card card-body">
                                <h5 className="mb-4 card-title">Create Account</h5>
                                <form noValidate="" autoComplete="off" className="form-inline">
                                    <div className="mb-3 mr-sm-2 form-group">
                                        <label htmlFor="fullname" className="visually-hidden">Full Name</label>
                                        <input value={fullname} name="fullname" id="fullname" placeholder="Full Name"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (fullnameError !== "" ? "is-invalid" : "")} />
                                        {fullnameError !== "" && <div className='invalid-feedback text-start'>{fullnameError}</div>}
                                    </div>
                                    <div className="mb-3 mr-sm-2 form-group">
                                        <label htmlFor="email" className="visually-hidden">Email</label>
                                        <input value={email} name="email" id="email" placeholder="Email"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (emailError !== "" ? "is-invalid" : "")} />
                                        {emailError !== "" && <div className='invalid-feedback text-start'>{emailError}</div>}
                                    </div>
                                    <div className="mb-3 mr-sm-2 form-group">
                                        <label htmlFor="phone" className="visually-hidden">Phone Number</label>
                                        <input value={phone} type="tel" name="phone" id="phone" placeholder="Phone Number"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (phoneError !== "" ? "is-invalid" : "")} />
                                        {phoneError !== "" && <div className='invalid-feedback text-start'>{phoneError}</div>}
                                    </div>
                                    <div className="mb-3 mr-sm-2 form-group">
                                        <label htmlFor="password" className="visually-hidden">Password</label>
                                        <input value={password} type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
                                        {passwordError !== "" && <div className='invalid-feedback text-start'>{passwordError}</div>}
                                    </div>
                                    <div className="mb-3 mr-sm-2 form-group">
                                        <label htmlFor="c_password" className="visually-hidden">Confirm Password</label>
                                        <input value={c_password} type="password" name="c_password" id="c_password" placeholder="Confirm Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
                                        {passwordError !== "" && <div className='invalid-feedback text-start'>{passwordError}</div>}
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button type="submit" onClick={this.register} className="py-2 px-3 btn btn-primary" >Register</button>
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
}

export default Register;
