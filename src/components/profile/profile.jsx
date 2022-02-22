import React from "react";
import ProfileDetails from "./profileDetails";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="account-account pt-5 pb-3 border-bottom">
                    <div className="account-heading fw-bold"> Account</div>
                    <div><small>John</small></div>
                </div>
                <ProfileDetails/>
            </div>
        )
    }
}
export default Profile;