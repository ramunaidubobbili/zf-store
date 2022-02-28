import React from "react";
import Pagination from "../admin/pagination";

class StoresList extends React.Component {
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
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {usersDataList.length !== 0 ?
              usersDataList.map((item, index) => (
              <tr key={index} className="pro-list-info">
                  <td>{item.id}</td>
                  {/* <td>{new Date(item.createdAt).toLocaleDateString()}</td> */}
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.description}</td>
              </tr>
              ))
              :
                  <tr><th scope="row" colSpan="5" className="p-3 text-center">No Data Available...</th></tr>
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

export default StoresList;
