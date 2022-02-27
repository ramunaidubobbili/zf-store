import React from "react";
import ServiceRequest from "../api/service";
import RegistedUsersList from "./registedUsersList";

class Stores extends React.Component{
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
        ServiceRequest.getRegisteredUsersData()
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
        ServiceRequest.findByRegistedName(e.target.value)
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
                    placeholder="Search by name" 
                    autoComplete="off"
                    defaultValue={searchValue}
                    onChange={this.onChangeSearchName}
                    type="text" aria-label="Search"/>
                </form>
                <RegistedUsersList usersDataList = {data}/>
            </div>
        )
    }
}
export default Stores;