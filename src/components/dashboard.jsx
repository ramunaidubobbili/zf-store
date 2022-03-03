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
            islogout: false,
            totalCartCount: null
        }
    }
    logout = () => {
        localStorage.removeItem("token");
        this.setState({
          islogout: true
        });
    };

    componentDidMount(){
        this.getTotalCartCount()
    }

    getTotalCartCount = (count) => {
        this.setState({
            totalCartCount: count
        })  
    }

    render(){
        const { match } = this.props;
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        return(
            <>
                <Header match={match} cartCount={this.state.totalCartCount} logout={this.logout}/>
                <div className="container pt-5 mt-5">
                    <Switch>
                        <Route path={`${match.path}/profile`}>
                            <Profile getTotalCartCount={this.getTotalCartCount}/>
                        </Route>
                        <Route path={`${match.path}/cart`}>
                            <Cart getTotalCartCount={this.getTotalCartCount}/>
                        </Route>
                        <Route exact path={`${match.path}/wishlist`}>
                            <Wishlist getTotalCartCount={this.getTotalCartCount}/>
                        </Route>
                        <Route exact path={`${match.path}`}>
                            <Home getTotalCartCount={this.getTotalCartCount} />
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