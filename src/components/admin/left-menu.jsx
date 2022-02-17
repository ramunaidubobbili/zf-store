import React from "react";
import { NavLink } from "react-router-dom";

class LeftMenu extends React.Component{
    render(){
        const { match } = this.props;
        return(
            <div className="col-sm-12 col-md-3">
                <div className="left-menu p-3 border rounded h-100">
                    <div className="nav flex-column nav-pills" >
                        <NavLink to={`${match.path}/users`} activeclassname="active" className="nav-link border-bottom">
                            Users
                        </NavLink>
                        <NavLink to={`${match.path}/stores`} activeclassname="active" className="nav-link border-bottom">
                            Stores
                        </NavLink>
                        <NavLink  to={`${match.path}/products`} activeclassname="active" className="nav-link border-bottom">
                            Products
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftMenu;