import React, { Component } from 'react';
import ServiceRequest from "./api/service";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        ServiceRequest.getProductsData()
        .then(response => {
            this.setState({
                products: response.data
            });
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }
  render() {
      const { products } = this.state;
    return (
        <div className="row">
            {products && products.map((product) => (
                <div key={product.id} className="col-sm-12 col-md-4 col-lg-3 my-2">
                    <div className="card">
                        <img src={product.imageUrl} className="card-img-top" alt={product.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5 fw-bold mb-0'>{"$"+product.price}</p>
                                <button className='btn btn-danger btn-sm'>Add Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
  }
}


