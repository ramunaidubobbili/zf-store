import React from "react";
import { Redirect } from "react-router-dom";
import Header from './header';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }

  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    debugger;
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };

  render() {
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
                          <input name="user_id" id="user_id" placeholder="User Name"  onChange={this.handleFormChange} className="py-2 px-3 form-control" />
                      </div>
                      <div className="mb-3 mr-sm-2 form-group">
                          <label htmlFor="user_password" className="visually-hidden">Password</label>
                          <input type="password" name="user_password" id="user_password" placeholder="Password" onChange={this.handleFormChange} className="py-2 px-3 form-control"/>
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
