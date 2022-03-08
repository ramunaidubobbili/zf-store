import React from "react";

import ServiceRequest from "../api/service";
import CartList from "./cartList";
import RightPanel from "./rightPanel";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            totalPrice: 0,
            discountPrice: 10,
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        ServiceRequest.getData()
        .then(response => {
        this.setState({
            data: response.data,
            totalPrice: this.totalPrice(response.data)
        });
        this.props.getTotalCartCount(response.data.length)
        console.log(response.data);
        })
        .catch((e) => {
        console.log(e);
        });
    }

    totalPrice = (data) => {
        const totalPrice = data.reduce((a, item) =>  a + parseInt(item.price*item.quantity, 10), 0);
        console.log("Total Price:"+totalPrice);
        return totalPrice;
    }

    increaseQunatity = (item) => {
        let data  = {
            quantity: item.quantity+1
        }
        ServiceRequest.update(item.id, data)
        .then(response => {
            this.setState(prevState => ({
            item: {
                ...prevState.item
            }
            }));
            //console.log("Updated Data: "+response.data);
            this.fetchData()
        })
        .catch(e => {
            console.log(e);
        });
    }
    decreaseQunatity = (item) => {
        if(item.quantity > 1){
            let data  = {
                quantity: item.quantity-1
            }
        
            ServiceRequest.update(item.id, data)
            .then(response => {
                this.setState(prevState => ({
                item: {
                    ...prevState.item
                }
                }));
                //console.log("Updated Data: "+response.data);
                this.fetchData()
            })
            .catch(e => {
                console.log(e);
            });
        }
    }

    deleteItem = (id) => {
        ServiceRequest.delete(id)
        .then(response => {
            console.log(response.data);
            this.fetchData();
        })
        .catch(e => {
            console.log(e);
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div>
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

                        <CartList 
                        data={data} 
                        increaseQunatity={this.increaseQunatity} 
                        decreaseQunatity={this.decreaseQunatity}
                        deleteItem={this.deleteItem}/>
                    </div>
                    <RightPanel totalPrice={this.state.totalPrice} discountPrice={this.state.discountPrice}/>
                </div>
            </div>
        )
    }
}

export default Cart;