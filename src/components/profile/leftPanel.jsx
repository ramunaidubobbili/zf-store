import React from "react";

class LeftPanel extends React.Component{
    render(){
        return(
            <ul className="left-panel list-group list-group-flush border-end pe-4">
                <li className="list-group-item ps-0 py-4">
                    <a href="" className="p-0">Overview</a>
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
                    <a href="" className="p-0 d-block active">Profile</a>
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
        )
    }
}

export default LeftPanel;