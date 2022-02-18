import React from "react";
import CiscoWatch from "../../images/watch.webp";
import Roadstar from "../../images/roadstar.webp";
import Nikeshoe from "../../images/shoe.webp";

import ServiceRequest from "../api/service";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            id: null,
            isLoading: false,
            quantity: 0
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({
          isLoading: true
        })
        setTimeout(() => {
          ServiceRequest.getData()
          .then(response => {
            this.setState({
              data: response.data,
              isLoading: false
            });
            console.log(response.data);
          })
          .catch((e) => {
            this.setState({
              isLoading: false
            })
            console.log(e);
          });
        }, 1000); 
    }

    increaseQunatity = (id) => {
        let data  = {
            quantity: this.state.data[id-1].quantity+1
        }
        setTimeout(() => {
            ServiceRequest.update(id, data)
            .then(response => {
                this.setState(prevState => ({
                item: {
                    ...prevState.item
                }
                }));
                console.log("Updated Data: "+response.data);
                this.fetchData()
            })
            .catch(e => {
                console.log(e);
            });
        }, 1000);  
    }
    decreaseQunatity = (id) => {
        let data  = {
            quantity: this.state.data[id-1].quantity-1
        }
        setTimeout(() => {
            ServiceRequest.update(id, data)
            .then(response => {
                this.setState(prevState => ({
                item: {
                    ...prevState.item
                }
                }));
                console.log("Updated Data: "+response.data);
                this.fetchData()
            })
            .catch(e => {
                console.log(e);
            });
        }, 1000);  
    }

    render() {
        const { data } = this.state;
        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <div className="addressStrip border rounded p-3 d-flex justify-content-between">
                            <div className="addressStrip-base-title small pe-2">
                                <div className="fw-bold">
                                    Deliver to: <span className="">Jhon Doe</span>
                                    <span className="addressStrip-base-highlight">, 535251</span>
                                </div>
                                <div className="addressStrip-base-subText">
                                    2-1-245, Road No: 14, Phase 2, Vevekandanagar, Hyderabad
                                </div>
                            </div>
                            <button className="btn btn-outline-danger btn-sm">CHANGE ADDRESS</button>
                        </div>

                        <div className="card rounded mt-4">
                            <div className="table-responsive p-2 pb-0">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.isLoading ?
                                        <tr>
                                            <td colSpan="4" className="text-center">
                                            <div className="d-flex justify-content-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        :
                                        data.length !== 0 ?
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <figure className="itemside d-flex align-items-start">
                                                        <div className="aside p-2 border rounded me-3">
                                                            <img src={item.image} className="img-sm" />
                                                        </div>
                                                        <figcaption className=""> 
                                                            <a href="#" className="title text-decoration-none text-dark" data-abc="true">{item.name}</a>
                                                            <p className="text-muted small mb-0">SIZE: {item.size}</p>
                                                            <p className="text-muted small">Brand: {item.brand}</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                        <button type="button" className="btn btn-sm btn-secondary" onClick={() => this.decreaseQunatity(item.id)}>-</button>
                                                        <button disabled type="button" className="btn btn-sm btn-sm btn-outline-secondary">{item.quantity}</button>
                                                        <button type="button" className="btn btn-sm btn-secondary" onClick={() => this.increaseQunatity(item.id)}>+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <span className="price fw-bold">{"$"+item.price}</span>  
                                                    </div>
                                                </td>
                                                <td align="right">  
                                                    <a href="" className="btn btn-danger btn-sm" data-abc="true">Remove</a> 
                                                </td>
                                            </tr>
                                        ))
                                        :
                                            <tr><th scope="row" colSpan="4" className="p-3 text-center">No Data Available...</th></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>  
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group"> <label>Have coupon?</label>
                                        <div className="input-group"> <input type="text" className="form-control coupon" name="" placeholder="Coupon code" /> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <div className="px-2">
                                <table className="table table-borderless table-shopping-cart mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Total price:</th>
                                            <td align="right">$185.00</td>
                                        </tr>
                                        <tr>
                                            <th>Discount:</th>
                                            <td align="right">- $10.00</td>
                                        </tr>
                                        <tr>
                                        <th>Total:</th>
                                        <td align="right"><strong>$175.00</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-grid gap-2 px-3 mb-3 pt-3 border-top">
                                <button className="btn btn-primary btn-lg"> Proceed Payment</button>
                                <button className="btn btn-success btn-lg"> Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;