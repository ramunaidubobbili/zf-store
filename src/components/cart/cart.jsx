import React from "react";

import ServiceRequest from "../api/service";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            totalPrice: 289,
            discountPrice: 10
        }
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
                                        {data.length !== 0 ?
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <figure className="itemside d-flex align-items-start">
                                                        <div className="aside p-2 border rounded me-3">
                                                            <img src={item.image} className="img-sm" alt={item.name} />
                                                        </div>
                                                        <figcaption className=""> 
                                                            <p className="title text-decoration-none text-dark" data-abc="true">{item.name}</p>
                                                            <p className="text-muted small mb-0">SIZE: {item.size}</p>
                                                            <p className="text-muted small">Brand: {item.brand}</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                        <button type="button" className="btn btn-sm btn-secondary">-</button>
                                                        <button disabled type="button" className="btn btn-sm btn-sm btn-outline-secondary">{item.quantity}</button>
                                                        <button type="button" className="btn btn-sm btn-secondary">+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <span className="price fw-bold">{"$"+item.price * item.quantity}</span>  
                                                    </div>
                                                </td>
                                                <td align="right">  
                                                    <button type="button" className="btn btn-danger btn-sm" data-abc="true" >Remove</button> 
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
                                            <td align="right">{"$"+this.state.totalPrice}</td>
                                        </tr>
                                        <tr>
                                            <th>Discount:</th>
                                            <td align="right">- {"$"+this.state.discountPrice}</td>
                                        </tr>
                                        <tr>
                                        <th>Total:</th>
                                        <td align="right"><strong>{"$"+(this.state.totalPrice-this.state.discountPrice)}</strong></td>
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