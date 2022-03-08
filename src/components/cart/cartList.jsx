import React, { Component } from 'react'

export class CartList extends Component {
  render() {
      const {data, increaseQunatity, decreaseQunatity, deleteItem} = this.props;
    return (
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
                                        <button type="button" className="btn btn-sm btn-secondary" onClick={() => decreaseQunatity(item)}>-</button>
                                        <button disabled type="button" className="btn btn-sm btn-sm btn-outline-secondary">{item.quantity}</button>
                                        <button type="button" className="btn btn-sm btn-secondary" onClick={() => increaseQunatity(item)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="price-wrap">
                                        <span className="price fw-bold">{"$"+item.price * item.quantity}</span>  
                                    </div>
                                </td>
                                <td align="right">  
                                    <button type="button" className="btn btn-danger btn-sm" data-abc="true" onClick={() => {deleteItem(item.id)}}>Remove</button> 
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
    )
  }
}

export default CartList