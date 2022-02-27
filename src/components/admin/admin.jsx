import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import AdminHeader from "./header";
import LeftMenu from "./left-menu";
import Users from "../users/users";
import Stores from "../stores/stores";
import Products from "../products/products";
import NotFound from "../pageNotFound";

class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          islogout: false
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
          islogout: true
        });
    };
    render(){
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
        return(
            <>
                <AdminHeader match={match} signOut={this.signOut}/>
                <div className="container p-4 pt-5">
                    <div className="row pt-5">
                        <LeftMenu  match={match}/>
                        <Switch>
                            <Route path={`${match.path}/users`}>
                                <Users />
                            </Route>
                            <Route path={`${match.path}/stores`}>
                                <Stores />
                            </Route>
                            <Route exact path={`${match.path}/products`}>
                                <Products />
                            </Route>
                            <Route exact path={`${match.path}`}>
                                <Users />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(Admin);