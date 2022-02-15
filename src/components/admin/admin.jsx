import React from "react";
import { Link } from "react-router-dom";

class Admin extends React.Component{
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
                                    <Link to="/" className="nav-link text-secondary text-center px-2 py-0">
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            
                <div className="container p-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div className="left-menu p-3 border rounded">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">An item</li>
                                    <li className="list-group-item px-0">A second item</li>
                                    <li className="list-group-item px-0">A third item</li>
                                    <li className="list-group-item px-0">A fourth item</li>
                                    <li className="list-group-item px-0">And a fifth one</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>073737644</td>
                                        <td>Jhon Doe</td>
                                        <td><button className="btn btn-link p-0">Active</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Admin;