import React from "react";
import TshirtImg from "../../images/tshirt.jpg";

class Cart extends React.Component{
    render(){
        return(
            <div className="container pt-4">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <div className="addressStrip border rounded p-3 d-flex justify-content-between">
                            <div className="addressStrip-base-title small pe-2">
                                <div className="fw-bold">
                                    Deliver to: <span className="">Ramunaidu Bobbili </span>
                                    <span className="addressStrip-base-highlight">, 502032</span>
                                </div>
                                <div className="addressStrip-base-subText">
                                    MIG-4460, Rd Number 14,  New MIG, Vidyuthnagar,  BHEL, Serilingampalle (M), Hyderabad
                                </div>
                            </div>
                            <button className="btn btn-outline-danger btn-sm">CHANGE ADDRESS</button>
                        </div>
                        <div className="card mt-4">
                            <div className="row g-0 p-3">
                                <div className="col-md-2">
                                    <img src={TshirtImg} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Roadstar</h5>
                                        <p className="card-text">Men White  Pure Cotton T-shirt</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4"></div>
                </div>
                
            </div>
        )
    }
}

export default Cart;