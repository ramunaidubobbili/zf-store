import React from "react";
import ProfileDetails from "./profileDetails";
import ServiceRequest from "../api/service";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userDetails: {}
        }
    }

    componentDidMount(){
        let getUserData = localStorage.getItem("userDetails");
        //console.log(JSON.parse(getUserData))
        this.setState({
            userDetails: JSON.parse(getUserData)
        })
        this.fetchData();
    }

    fetchData = () => {
        ServiceRequest.getData()
        .then(response => {
            this.props.getTotalCartCount(response.data.length)
        })
        .catch((e) => {
            console.log(e);
        });
    }

    render(){
        return(
            <div>
                <div className="account-account pt-5 pb-3 border-bottom">
                    <div className="account-heading fw-bold"> Account</div>
                    <div><small>John</small></div>
                </div>
                <ProfileDetails userDetails={this.state.userDetails}/>
            </div>
        )
    }
}
export default Profile;