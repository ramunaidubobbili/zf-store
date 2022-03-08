import React from "react";
import ServiceRequest from "../api/service";

class Wishlist extends React.Component{

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        ServiceRequest.getData()
        .then(response => {
            this.props.getTotalCartCount(response.data.length)
        })
        .catch((e) => {
            console.log(e);
        });
    }
    render(){
        return(
            <div>Wishlist</div>
        )
    }
}

export default Wishlist;