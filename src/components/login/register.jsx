import React from 'react';
import {Link} from 'react-router-dom';

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
            passwordError: ''
        }
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
            
        }
        else {
            e.preventDefault()
        }
        
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
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(email === "" || !regex.test(email)){
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


    render() {
        const {emailError, fullnameError, phoneError, passwordError} = this.state;
        return (
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-sm-6 col-md-5 text-center">
                        <div className="shadow-sm p-4 mb-3 bg-body border card card-body">
                            <h5 className="mb-4 card-title">Create Account</h5>
                            <form noValidate="" autoComplete="off" className="form-inline">
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="fullname" className="visually-hidden">Full Name</label>
                                    <input name="fullname" id="fullname" placeholder="Full Name"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (fullnameError !== "" ? "is-invalid" : "")} />
                                    {fullnameError !== "" && <div className='invalid-feedback text-start'>{fullnameError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input name="email" id="email" placeholder="Email"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (emailError !== "" ? "is-invalid" : "")} />
                                    {emailError !== "" && <div className='invalid-feedback text-start'>{emailError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="phone" className="visually-hidden">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" placeholder="Phone Number"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (phoneError !== "" ? "is-invalid" : "")} />
                                    {phoneError !== "" && <div className='invalid-feedback text-start'>{phoneError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="password" className="visually-hidden">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
                                    {passwordError !== "" && <div className='invalid-feedback text-start'>{passwordError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="c_password" className="visually-hidden">Confirm Password</label>
                                    <input type="password" name="c_password" id="c_password" placeholder="Confirm Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
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
            )
    }
}

export default Register;
