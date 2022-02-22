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

    getUserData = (data, email, password) => {
        let existData = {};
        for(let i = 0; i <= data.length; i++){
            if(data[i].email === email && data[i].password === password){
                existData = data[i]
            }
            return existData;
        } 
    }

    login = (e) => {
        if(this.state.email !== "" || this.state.password !== ""){
            let emailError = "";
            let passwordError = "";
            const getUserData = this.getUserData(this.state.usersData, this.state.email, this.state.password);
            console.log(getUserData)
            if(getUserData.email === this.state.email && getUserData.password === this.state.password){
                localStorage.setItem("userDetails", JSON.stringify(getUserData));
                localStorage.setItem("token", "T");
                const getSessionData = localStorage.getItem("userDetails");
                this.setState({
                    userDetails: getUserData,
                    isLoggedIn: !this.state.isLoggedIn
                });
            } else{
                if(getUserData.email !== this.state.email){
                    emailError = "This email is not registed"
                }
                if(getUserData.password !== this.state.password){
                    passwordError= "Password is not correct"
                }
            }
            this.setState({
                emailError: emailError,
                passwordError: passwordError
            })

        }else{
            this.setState({
                emailError: "Email is not valid",
                passwordError: "Password must be minimum 3 digits"
            })
        }
        e.preventDefault()
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