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
                                    
                                    <form className="d-flex w-25 me-4">
                                        <input className="form-control search-control me-2" type="search" placeholder="Search for products, brands and more" aria-label="Search"/>
                                    </form>
                                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center align-items-center my-md-0 text-small">
                                        <li>
                                            <Link to={`${this.props.match.path}/profile`} className="nav-link text-secondary text-center px-2 py-0">
                                                <i className="fa fa-user d-block mx-auto"></i>
                                                <small>Profile</small>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={`${this.props.match.path}/wishlist`}className="nav-link text-secondary text-center px-2 py-0">
                                                <i className="fa fa-heart d-block mx-auto"></i>
                                                <small>Wishlist</small>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={`${this.props.match.path}/cart`} className="nav-link position-relative text-secondary text-center px-2 py-0">
                                                <i className="fa fa-shopping-bag d-block mx-auto"></i>
                                                <small>Bag 
                                                    {this.props.cartCount !== 0 && <span className="cartCount position-absolute fw-bold">{ this.props.cartCount}</span>}
                                                </small>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <button className="btn btn-primary ms-2" onClick={this.props.logout}>Logout</button>
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