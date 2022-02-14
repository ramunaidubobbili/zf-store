import React from "react";
import LeftPanel from "./leftPanel";

class ProfileDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <LeftPanel/>
                </div>
                <div className="col-sm-12 col-md-10">
                    <div className="page-profile my-4">
                        <div className="profile-card border p-5">
                            <div className="profile-infoLabel fs-5 border-bottom px-5 pb-3">Profile Details</div>
                            <div className="table-sec">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>Full Name</td>
                                            <td>Jhon</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile Number</td>
                                            <td>987654321</td>
                                        </tr>
                                        <tr>
                                            <td>Email ID</td>
                                            <td>jhondoe@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>MALE</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>- not added -</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>- not added -</td>
                                        </tr>
                                        <tr>
                                            <td>Alternate Mobile</td>
                                            <td>- not added -</td>
                                        </tr>
                                        <tr>
                                            <td>Hint Name</td>
                                            <td>- not added -</td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                                <button className="btn btn-lg w-100 btn-danger"> EDIT </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileDetails;