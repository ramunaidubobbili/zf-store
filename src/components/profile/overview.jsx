import React from "react";

class Overview extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <ul className="left-panel list-group list-group-flush border-end pe-4">
                        <li className="list-group-item ps-0 py-4">
                            <a href="" className="p-0 active">Overview</a>
                        </li>
                        <li className="list-group-item ps-0 py-4">
                            <h6 className="fw-normal text-uppercase">Orders</h6>
                            <a href="" className="p-0 d-block">Orders &amp; Returns</a>
                        </li>
                        <li className="list-group-item ps-0 py-4">
                            <h6 className="fw-normal text-uppercase">credits</h6>
                            <a href="" className="p-0 d-block">Coupons</a>
                            <a href="" className="p-0 d-block">ZF Credits</a>
                            <a href="" className="p-0 d-block">ZFCash</a>
                        </li>
                        <li className="list-group-item ps-0 py-4">
                            <h6 className="fw-normal text-uppercase">Account</h6>
                            <a href="" className="p-0 d-block">Profile</a>
                            <a href="" className="p-0 d-block">Saved Cards</a>
                            <a href="" className="p-0 d-block">Addresses</a>
                            <a href="" className="p-0 d-block">ZF Insider</a>
                        </li>
                        <li className="list-group-item ps-0 py-4">
                            <h6 className="fw-normal text-uppercase">Legal</h6>
                            <a href="" className="p-0 d-block">Terms of Use</a>
                            <a href="" className="p-0 d-block">Privacy Policy</a>
                        </li>
                    </ul>
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
export default Overview;