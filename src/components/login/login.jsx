import React from "react";
import { Redirect } from "react-router-dom";
import Header from './header';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      islogged: false,
      user_id: '',
      user_password: '',
      userIdError: '',
      userPasswordError: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  userNameValidation = (userid) => {
    if(userid !== ""){
      if(userid === "admin"){
        this.setState({
          userIdError: ""
        })
        return true
      }
      this.setState({
        userIdError: "User id is incorrect."
      })
      return false
    }
    this.setState({
      userIdError: "User id is required."
    })
    return false
  }
  passwordValidation = (pwd) => {
    if(pwd !== ""){
      if(pwd === "123"){
        this.setState({
          userPasswordError: ""
        })
        return true
      }
      this.setState({
        userPasswordError: "User id is incorrect."
      })
      return false
    }
    this.setState({
      userPasswordError: "User id is required."
    })
    return false
  }

  login = (e) => {
    let isValidUserId = this.userNameValidation(this.state.user_id);
    let isValidPassword = this.passwordValidation(this.state.user_password);
    if(isValidUserId && isValidPassword){
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    (e).preventDefault();
  };

  render() {
    const {userIdError, userPasswordError} = this.state;
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
                        <input name="user_id" id="user_id" placeholder="User Name"  onChange={this.handleChange} className={"py-2 px-3 form-control " + (userIdError !== "" ? "is-invalid" : "")} />
                        {userIdError !== "" && <div className='invalid-feedback text-start'>{userIdError}</div>}
                      </div>
                      <div className="mb-3 mr-sm-2 form-group">
                        <label htmlFor="user_password" className="visually-hidden">Password</label>
                        <input type="password" name="user_password" id="user_password" placeholder="Password" onChange={this.handleChange} className={"py-2 px-3 form-control " + (userPasswordError !== "" ? "is-invalid" : "")}/>
                        {userPasswordError !== "" && <div className='invalid-feedback text-start'>{userPasswordError}</div>}
                      </div>
                      <div className="d-grid gap-2">
                          <button type="submit" onClick={this.login} className="py-2 px-3 btn btn-primary" >Login</button>
                      </div>
                  </form>
              </div>
              <i className="small text-secondry">Username === "admin" && Password === "123"</i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
