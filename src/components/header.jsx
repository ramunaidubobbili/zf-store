import React from "react";

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
                                <a className="navbar-brand" href="./home">ZF Store</a>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase fw-bold px-md-3" href="./men">Men</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase fw-bold px-md-3" href="./women">women</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase fw-bold px-md-3" href="./kids">kids</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase fw-bold px-md-3" href="./home_living">home&amp;living</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase fw-bold px-md-3" href="./beauty">beauty</a>
                                    </li>
                                    </ul>
                                    <form className="d-flex w-25 me-4">
                                    <input className="form-control search-control me-2" type="search" placeholder="Search for products, brands and more" aria-label="Search"/>
                                    </form>
                                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                    <li>
                                        <a href="./profile" className="nav-link text-secondary text-center px-2 py-0">
                                        <i className="fa fa-user d-block mx-auto"></i>
                                        <small>Profile</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./wishlist" className="nav-link text-secondary text-center px-2 py-0">
                                        <i className="fa fa-heart d-block mx-auto"></i>
                                        <small>Wishlist</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./bag" className="nav-link text-secondary text-center px-2 py-0">
                                        <i className="fa fa-shopping-bag d-block mx-auto"></i>
                                        <small>Bag</small>
                                        </a>
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