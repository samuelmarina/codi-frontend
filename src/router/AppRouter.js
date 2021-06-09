import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AppContext from "../helpers/context/context.js";

import HomeScreen from "../screens/Home/HomeScreen.js";
import UserRoutes from "./UserRoutes.js";

export const AppRouter = () => {
    const { user } = useContext(AppContext);
    
    return (
        <Router>
            <Switch>
                <Route 
                    path="/"
                    exact
                >
                    { user ? <Redirect to="/difficulties" /> : <HomeScreen />}
                </Route>
                <UserRoutes user={user}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
