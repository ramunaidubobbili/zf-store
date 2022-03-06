import React, { useEffect, useState } from 'react';
import ProfileDetails from "./ProfileDetails";
import ServiceRequest from "../api/service";

const Profile = () => {
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        let getUserData = localStorage.getItem("userDetails");
        setUserDetails(JSON.parse(getUserData))
    }, [])
    useEffect(() => {
        ServiceRequest.getData()
        .then(response => {
            //this.props.getTotalCartCount(response.data.length)
        })
        .catch((e) => {
            console.log(e);
        });
    }, [])
    return (
        <div>
            <div className="account-account pt-5 pb-3 border-bottom">
                <div className="account-heading fw-bold"> Account</div>
                <div><small>John</small></div>
            </div>
            <ProfileDetails userDetails={userDetails}/>
        </div>
    )
}

export default Profile;
