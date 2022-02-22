import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            emailError: '',
            passwordError: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    login = (e) => {
        let isValidEmail = this.emailValidation(this.state.email);
        let isValidPassword = this.passwordValidation(this.state.password, this.state.c_password);
        if( !isValidEmail && !isValidPassword){
            
        }
        else {
            e.preventDefault()
        }
        
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

    passwordValidation = (pwd) => {
        let passwordError="";
        if(pwd === ""){
            this.setState({
                passwordError: "Password must be minimum 3 digits"
            })
            return true
        }
        this.setState({
            passwordError: passwordError
        })
        return false;
    }


    render() {
        const {emailError, passwordError} = this.state;
        return (
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-sm-6 col-md-5 text-center">
                        <div className="shadow-sm p-4 mb-3 bg-body border card card-body">
                            <h5 className="mb-4 card-title">Login</h5>
                            <form noValidate="" autoComplete="off" className="form-inline">
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="user_id" className="visually-hidden">Username</label>
                                    <input name="user_id" id="user_id" placeholder="User Name"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (emailError !== "" ? "is-invalid" : "")} />
                                    {emailError !== "" && <div className='invalid-feedback text-start'>{emailError}</div>}
                                </div>
                                <div className="mb-3 mr-sm-2 form-group">
                                    <label htmlFor="user_password" className="visually-hidden">Password</label>
                                    <input type="password" name="user_password" id="user_password" placeholder="Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
                                    {passwordError !== "" && <div className='invalid-feedback text-start'>{passwordError}</div>}</div>
                                <div className="d-grid gap-2">
                                    <button type="submit" onClick={this.login} className="py-2 px-3 btn btn-primary" >Login</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            Not yet registered? <Link to="/register" className='link'>Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Login;