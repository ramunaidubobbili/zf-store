import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <div className='login'>
                <h2>New User Login..!</h2>
                <form onSubmit= {this.handleSubmit} >
                    <input type='email' name='Email' placeholder='enter email Id' required onChange ={this.handleChange} />
                    <br></br>
                    <input type='password' name='Password' placeholder='Enter Your Password' required onChange={this.handleChange} />
                    <br></br>
                    <button type="submit" onSubmit={this.handleSubmit} class="btn btn-primary btn-block">Log In</button>
                    <ul >
                    <Link to="/register">
                            <li>Register Here</li>   
                        </Link> 
                        <Link to="/store">
                            <li>Stores Login</li>   
                        </Link> 
                    </ul>
                </form>
            </div>
            )
    }
}

export default Login;