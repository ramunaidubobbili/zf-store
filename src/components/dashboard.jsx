import React from "react";
import { withRouter } from "react-router";
import { Redirect, Switch, Route } from "react-router-dom";

import Cart from "./cart/cart";
import Profile from "./profile/profile";
import Wishlist from "./wishlist/wishlist";
import NotFound from "./pageNotFound";
import Header from "./header";
import Home from "./home";


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            islogout: false
        }
    }
    logout = () => {
        localStorage.removeItem("token");
        this.setState({
          islogout: true
        });
    };
    render(){
        const { match } = this.props;
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        return(
            <>
                <Header match={match} logout={this.logout}/>
                <div className="container pt-5 mt-5">
                    <Switch>
                        <Route path={`${match.path}/profile`}>
                            <Profile />
                        </Route>
                        <Route path={`${match.path}/cart`}>
                            <Cart />
                        </Route>
                        <Route exact path={`${match.path}/wishlist`}>
                            <Wishlist />
                        </Route>
                        <Route exact path={`${match.path}`}>
                            <Home />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </>
        )
    }
}

export default withRouter(Dashboard);