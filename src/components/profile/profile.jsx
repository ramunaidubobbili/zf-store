import React from "react";
import Overview from "./overview";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="container">
                <div className="account-account pt-5 pb-3 border-bottom">
                    <div className="account-heading fw-bold"> Account</div>
                    <div><small>John</small></div>
                </div>
                <Overview/>
            </div>
        )
    }
}
export default Profile;