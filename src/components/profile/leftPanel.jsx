import React from "react";
import {Link} from "react-router-dom";

class LeftPanel extends React.Component{
    render(){
        return(
            <ul className="left-panel list-group list-group-flush border-end pe-4">
                <li className="list-group-item ps-0 py-4">
                    <Link className="p-0">Overview</Link>
                </li>
                <li className="list-group-item ps-0 py-4">
                    <h6 className="fw-normal text-uppercase">Orders</h6>
                    <Link className="p-0 d-block">Orders &amp; Returns</Link>
                </li>
                <li className="list-group-item ps-0 py-4">
                    <h6 className="fw-normal text-uppercase">Account</h6>
                    <Link className="p-0 d-block active">Profile</Link>
                    <Link className="p-0 d-block">Addresses</Link>
                </li>
                <li className="list-group-item ps-0 py-4">
                    <h6 className="fw-normal text-uppercase">Legal</h6>
                    <Link className="p-0 d-block">Terms of Use</Link>
                    <Link className="p-0 d-block">Privacy Policy</Link>
                </li>
            </ul>
        )
    }
}

export default LeftPanel;