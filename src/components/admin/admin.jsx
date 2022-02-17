import React from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import AdminHeader from "./header";
import LeftMenu from "./left-menu";
import Users from "./users";
import Stores from "./stores";
import Products from "./products";
import NotFound from "../pageNotFound";

class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          islogout: false
        };
    }
    
    render(){
    
        const { match } = this.props;
        return(
            <>
                <AdminHeader match={match} />
                <div className="container p-4">
                    <div className="row">
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