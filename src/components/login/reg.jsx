//import {React, useState} from React;


export default function Registers() {
    /*const[name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [number, setNumber]=useState("")
    const [password, setPassword]=useState("")*/
    

    return(
        <div className="row vh-100 justify-content-center align-items-center" >
            <div className="col-sm-6 col-md-5 text-center"  >
           <h2 class="card-title mt-3 text-center"> Registration Page</h2>
            <input type="text" className="form-control" placeholder="name"/>
            <br/>
            <input type="text" className="form-control" placeholder="email"/>
            <br/>
            <input type="" maxLength="10" className="form-control" placeholder="number"/>
            <br/>
            <input type="password" className="form-control" placeholder="password"/>
            <br/>
            <input  type="" className="form-control" placeholder="re-enter password"/>
            <br/>
            <button className="btn btn-primary ">Sign-Up</button><li>Login here</li>
        </div>
        
        </div>
    )
}
