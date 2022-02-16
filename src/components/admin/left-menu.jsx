import React from "react";
import { NavLink } from "react-router-dom";

class LeftMenu extends React.Component{
    render(){
        return(
            <div className="col-sm-12 col-md-3">
                <div className="left-menu p-3 border rounded h-100">
                    <div className="nav flex-column nav-pills" >
                        <NavLink to="users" activeclassname="active" className="nav-link border-bottom">
                            Users
                        </NavLink>
                        <NavLink to="stores" activeclassname="active" className="nav-link border-bottom">
                            Stores
                        </NavLink>
                        <NavLink to="products" activeclassname="active" className="nav-link border-bottom">
                            Products
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftMenu;