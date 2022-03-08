import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Redirect, Switch, Route } from "react-router-dom";

import Cart from "../cart/Cart";
import Profile from "../profile/Profile";
import Wishlist from "../wishlist/WishList";
import NotFound from "../PageNotFound";
import Header from "./Header";
import Products from "../products/Products";

const Home = ({match}) => {
    const [isLogout, setIsLogout] = useState(false);
    const [totalCartCount, setTotalCartCount] = useState(null);

    const logout = () => {
        localStorage.removeItem("token");
        setIsLogout(true);
    };

    useEffect(() => {
        setTotalCartCount(localStorage.getItem("cartListCount"))
    }, [])

    if (isLogout) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Header match={match} cartCount={totalCartCount} logout={logout}/>
            <div className="container pt-5 mt-5">
                <Switch>
                    <Route exact path={`${match.path}`}>
                        <Products/>
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default withRouter(Home)
