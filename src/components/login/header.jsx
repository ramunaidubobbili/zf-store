import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
                <header className="header mb-3 d-flex fixed-top border-bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light py-md-3">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <Link to="/" className="navbar-brand">ZF Store</Link>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                        <li>
                                            <Link to="/" className="btn btn-primary">
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;