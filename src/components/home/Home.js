import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./Header";
import LeftMenu from "../shared_components/LeftMenu";
import Users from "../users/Users";
import PageNotFound from "../PageNotFound";
import Stores from "../stores/Stores";
import Products from "../products/Products";

const Home = ({match}) => {
    const [isLogout, setIsLogout] = useState(false);

    const signOut = () => {
        localStorage.removeItem("token");
        setIsLogout(true);
    };


    if (isLogout) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Header match={match} signOut={signOut}/>
            <div className="container p-4 pt-5">
                <div className="row pt-5">
                    <LeftMenu match={match}/>
                    <Switch>
                        <Route path={`/users`}>
                            <Users/>
                        </Route>
                        <Route exact path={`${match.path}`}>
                            <Users />
                        </Route> 
                        <Route path="*">
                            <PageNotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home)