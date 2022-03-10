import React, { useEffect, useState } from 'react';
import ServiceRequest from "../api/service";
import CartList from './CartList';
import RightPanel from './RightPanel';

const Cart = ({refreshCount}) => {
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(10);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ServiceRequest.getData()
        .then(response => {
            setData(response.data);
            setTotalPrice(getTotalPrice(response.data))
            localStorage.setItem("cartListCount", response.data.length)
            refreshCount()
            // console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }

    const getTotalPrice = (data) => {
        const totalPrice = data.reduce((a, item) =>  a + parseInt(item.price*item.quantity, 10), 0);
        //console.log("Total Price:"+totalPrice);
        return totalPrice;
    }

    const increaseQunatity = (item) => {
        let data  = {
            quantity: item.quantity+1
        }
        ServiceRequest.update(item.id, data)
        .then(response => {
            //console.log("Updated Data: "+response.data);
            fetchData()
        })
        .catch(e => {
            console.log(e);
        });
    }
    const decreaseQunatity = (item) => {
        if(item.quantity > 1){
            let data  = {
                quantity: item.quantity-1
            }
        
            ServiceRequest.update(item.id, data)
            .then(response => {
                //console.log("Updated Data: "+response.data);
                fetchData()
            })
            .catch(e => {
                console.log(e);
            });
        }
    }

    const deleteItem = (id) => {
        ServiceRequest.delete(id)
        .then(response => {
            console.log(response.data);
            fetchData();
        })
        .catch(e => {
            console.log(e);
        })
    }
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

                    <CartList data={data} increaseQunatity={increaseQunatity} decreaseQunatity={decreaseQunatity} deleteItem={deleteItem}/>
                </div>
                <RightPanel totalPrice={totalPrice} discountPrice={discountPrice}/> 
            </div>
        </div>
    )
}

export default Cart;
