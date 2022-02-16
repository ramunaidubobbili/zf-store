import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminHeader from "./header";
import LeftMenu from "./left-menu";
import Users from "./users";
import Stores from "./stores";
import Products from "./products";

class Admin extends React.Component{
    render(){
        return(
            <>
                <AdminHeader/>
                <div className="container p-4">
                    <div className="row">
                        <LeftMenu/>
                        <Routes>
                            <Route exact path="users" element={ <Users/> } />
                            <Route path='stores' element={ <Stores/> }/>
                            <Route path="products" element={ <Products/> } /> 
                        </Routes> 
                    </div>
                </div>
            </>
        )
    }
}
export default Admin;