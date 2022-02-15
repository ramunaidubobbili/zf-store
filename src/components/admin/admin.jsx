import React from "react";

class Admin extends React.Component{
    render(){
        return(
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
        )
    }
}
export default Admin;