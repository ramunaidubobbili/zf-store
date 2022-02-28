import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import ServiceRequest from "../api/service";
import Header from "./header";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:'',
            emailError: '',
            passwordError: '',
            usersData: [],
            isLoggedIn: false
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

    getUserData = (data, email) => {
        let existData = {};
        for(let i = 0; i < data.length; i++){
            if(data[i].email === email){
                existData = data[i]
            }    
        } 
        return existData;
    }

    login = (e) => {
      let isValidEmail = this.emailValidation(this.state.email, this.state.usersData);
      let isValidPassword = this.passwordValidation(this.state.email, this.state.password, this.state.usersData);

      if(isValidEmail && isValidPassword){
        let getUser = this.getUserData(this.state.usersData, this.state.email);
        // console.log("Users Details", getUser)
        localStorage.setItem("userDetails", JSON.stringify(getUser));
        // console.log("Users Details Session", localStorage.getItem("userDetails"))
        localStorage.setItem("token", getUser.id+getUser.phone);
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
      }
      e.preventDefault();
    }

    emailValidation = (email, data) => {
      if(email !== ""){
        let getUser = this.getUserData(data, email);
        if(getUser.length !== 0 && email === getUser.email){
          this.setState({
            emailError: ""
          })
          return true
        }
        this.setState({
          emailError: "Email is incorrect."
        })
        return false
      }
      this.setState({
        emailError: "Email is required."
      })
      return false
    }

    passwordValidation = (email, pwd, data) => {
      if(pwd !== ""){
        let getUser = this.getUserData(data, email);
        if(getUser.length !== 0 && email === getUser.email && pwd === getUser.password){
          this.setState({
            passwordError: ""
          })
          return true
        }
        this.setState({
          passwordError: "Password is incorrect."
        })
        return false
      }
      this.setState({
        passwordError: "Password is required."
      })
      return false
    }

    render() {
        const {emailError, passwordError} = this.state;
        let token = localStorage.getItem("token");
        if (token) {
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
                                        <input name="email" id="email" placeholder="Email"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (emailError !== "" ? "is-invalid" : "")} />
                                        {emailError !== "" && <div className='invalid-feedback text-start'>{emailError}</div>}
                                    </div>
                                    <div className="mb-3 mr-sm-2 form-group">
                                        <label htmlFor="user_password" className="visually-hidden">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (passwordError !== "" ? "is-invalid" : "")}/>
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
            </>
            )
    }
}

export default Login;