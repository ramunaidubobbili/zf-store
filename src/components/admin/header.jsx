import React from "react";
import { Link } from "react-router-dom";

class AdminHeader extends React.Component{   
    render(){
        return(
            <header className="header mb-3 d-flex fixed-top border-bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light py-md-3">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link to={this.props.match.path} className="navbar-brand">ZF Admin</Link>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                                <button onClick={this.props.signOut} className=" btn btn-link nav-link text-secondary text-center px-2 py-0">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default AdminHeader;