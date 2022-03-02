import React from "react";
import Pagination from "../admin/pagination";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductsList: []
    };
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      ProductsList: pageOfItems
    });
  };

  render() {
    const { ProductsList } = this.props;
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ProductsList.length !== 0 ?
              ProductsList.map((item, index) => (
              <tr key={index} className="pro-list-info">
                  <td>{item.id}</td>
                  <td><img src={item.imageUrl} alt={item.name} /></td>
                  <td>{item.name}</td>
                  <td>{"$"+parseFloat(item.price).toFixed(2)}</td>
                  <td>{item.description}</td>
                  <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
              ))
              :
                  <tr><th scope="row" colSpan="6" className="p-3 text-center">No Data Available...</th></tr>
              }
            </tbody>
          </table>
        </div>

       
      </div>
    );
  }
}

export default ProductsList;
