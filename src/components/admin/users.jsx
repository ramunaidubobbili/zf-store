import React from "react";
import ServiceRequest from "../api/service";

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          searchValue: ""
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        ServiceRequest.getData()
        .then(response => {
        this.setState({
            data: response.data
        });
        console.log(response.data);
        })
        .catch((e) => {
        console.log(e);
        });
    }



    onChangeSearchName = (e) => {
        ServiceRequest.findByName(e.target.value)
        .then(response => {
            this.setState({
            data: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }
    render(){
        const {data, searchValue} = this.state;
        return(
            <div className="col-sm-12 col-md-9">
                <form className="d-flex mb-4 pb-3 border-bottom justify-content-end">
                    <input className="form-control form-control-lg search-control w-50" 
                    onChange={this.onChangeSearchName}
                    placeholder="Search by name" 
                    autoComplete="off"
                    defaultValue={searchValue}
                    type="text" aria-label="Search"/>
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
                            {data.length !== 0 ?
                            data.map((item, index) => (
                            <tr key={index}>
                                <td scope="row">{item.userid}</td>
                                <td>{item.name}</td>
                                <td><span className={"badge " + (item.status == "Active" ? "bg-success" : "bg-warning text-dark")}>{item.status}</span></td>
                            </tr>
                            ))
                            :
                                <tr><th scope="row" colSpan="3" className="p-3 text-center">No Data Available...</th></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Users;