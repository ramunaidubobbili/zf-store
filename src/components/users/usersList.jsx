import React from "react";
import Pagination from "../admin/pagination";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersDataList: []
    };
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      usersDataList: pageOfItems
    });
  };

  render() {
    const { usersDataList } = this.state;

    return (
      <div>
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
              {usersDataList.length !== 0 ?
              usersDataList.map((item, index) => (
              <tr key={index} className="pro-list-info">
                  <td>{item.userid}</td>
                  <td>{item.name}</td>
                  <td><span className={"badge " + (item.status === "Active" ? "bg-success" : "bg-warning text-dark")}>{item.status}</span></td>
              </tr>
              ))
              :
                  <tr><th scope="row" colSpan="3" className="p-3 text-center">No Data Available...</th></tr>
              }
            </tbody>
          </table>
        </div>

        <Pagination
          pageSize={8}
          items={this.props.usersDataList}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default UsersList;
