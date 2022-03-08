import React from 'react';
import LeftMenu from './LeftMenu';

const ProfileDetails = ({userDetails}) => {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-2">
                <LeftMenu/>
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
                                        <td>{userDetails.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>{userDetails.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Email ID</td>
                                        <td>{userDetails.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
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

export default ProfileDetails