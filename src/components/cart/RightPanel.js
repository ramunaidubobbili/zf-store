import React from 'react'

const RightPanel = ({totalPrice, discountPrice}) => {
    return (
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
                                <td align="right">{"$"+totalPrice}</td>
                            </tr>
                            <tr>
                                <th>Discount:</th>
                                <td align="right">- {"$"+discountPrice}</td>
                            </tr>
                            <tr>
                            <th>Total:</th>
                            <td align="right"><strong>{"$"+(totalPrice-discountPrice)}</strong></td>
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
    )
}

export default RightPanel