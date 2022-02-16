import React from "react";
import CiscoWatch from "../../images/watch.webp";
import Roadstar from "../../images/roadstar.webp";
import Nikeshoe from "../../images/shoe.webp";

class Cart extends React.Component {
    render() {
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
                                        <tr>
                                            <td>
                                                <figure className="itemside d-flex align-items-start">
                                                    <div className="aside p-2 border rounded me-3">
                                                        <img src={Nikeshoe} className="img-sm" />
                                                    </div>
                                                    <figcaption className=""> 
                                                        <a href="#" className="title text-decoration-none text-dark" data-abc="true">Men White ZOOM WINFLO 7 Running Shoes</a>
                                                        <p className="text-muted small mb-0">SIZE: L</p>
                                                        <p className="text-muted small">Brand: NIKE</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td> 
                                                <select className="form-control form-control-sm">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select> 
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <span className="price fw-bold">$20.00</span>  
                                                </div>
                                            </td>
                                            <td align="right">  
                                                <a href="" className="btn btn-danger btn-sm" data-abc="true"> Remove</a> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <figure className="itemside d-flex align-items-start">
                                                    <div className="aside p-2 border rounded me-3">
                                                        <img src={Roadstar} className="img-sm" />
                                                    </div>
                                                    <figcaption className=""> 
                                                        <a href="#" className="title text-decoration-none text-dark" data-abc="true">Men Black Analogue and Digital Multi Function Watch MFB-PN-OS-AD1711</a>
                                                        <p className="text-muted small mb-0">SIZE: L</p>
                                                        <p className="text-muted small">Brand: Roadstar</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td> 
                                                <select className="form-control form-control-sm">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select> 
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <span className="price fw-bold">$10.00</span>  
                                                </div>
                                            </td>
                                            <td align="right">  
                                                <a href="" className="btn btn-danger btn-sm" data-abc="true"> Remove</a> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <figure className="itemside d-flex align-items-start">
                                                    <div className="aside p-2 border rounded me-3">
                                                        <img src={CiscoWatch} className="img-sm" />
                                                    </div>
                                                    <figcaption className=""> 
                                                        <a href="#" className="title text-decoration-none text-dark" data-abc="true">Casio G-Shock Men Black Analogue and Digital watch G468 GA-1000-4ADR</a>
                                                        <p className="text-muted small mb-0">SIZE: L</p>
                                                        <p className="text-muted small">Brand: CISCO</p>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td> 
                                                <select className="form-control form-control-sm">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select> 
                                            </td>
                                            <td>
                                                <div className="price-wrap">
                                                    <span className="price fw-bold">$155.00</span>  
                                                </div>
                                            </td>
                                            <td align="right">  
                                                <a href="" className="btn btn-danger btn-sm" data-abc="true"> Remove</a> 
                                            </td>
                                        </tr>
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