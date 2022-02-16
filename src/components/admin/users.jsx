import React from "react";

class Users extends React.Component{
    render(){
        return(
            <div className="col-sm-12 col-md-9">
                <form className="d-flex me-4 mb-4 pb-3 border-bottom justify-content-end">
                    <input className="form-control form-control-lg search-control w-50" type="search" placeholder="Search for name" aria-label="Search"/>
                </form>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">073737644</td>
                                <td>Jhon Doe</td>
                                <td><button className="btn btn-link p-0">Active</button></td>
                            </tr>
                            <tr>
                                <td scope="row">96676224</td>
                                <td>Micle Jack</td>
                                <td><button className="btn btn-link p-0">Active</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Users;