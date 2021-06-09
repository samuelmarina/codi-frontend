import React from "react";
import { Switch,Route } from "react-router-dom";

import DifficultiesScreen from "../screens/Difficulties/Difficulties";
import Navbar from "../components/Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import SubscriptionScreen from "../screens/Subscription/SubscriptionScreen";
import ProblemsScreen from "../screens/Problems/ProblemsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import PaymentSuccessScreen from "../screens/Payment_Success/PaymentSuccessScreen";
import Page404 from "../screens/404/404";
import AdminRoute from "./AdminRoute";
import ProblemFormScreen from  "../screens/ProblemForm/ProblemFormScreen";

export const UserRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <PrivateRoute path="/difficulties" exact>
                    <DifficultiesScreen />
                </PrivateRoute>

                <PrivateRoute path="/premium" exact>
                    <SubscriptionScreen />
                </PrivateRoute>

                <PrivateRoute 
                    path="/problems"
                >
                    <ProblemsScreen />
                </PrivateRoute>

                <PrivateRoute 
                    path="/profile"
                >
                    <ProfileScreen />
                </PrivateRoute>

                <PrivateRoute 
                    path="/payment_success"
                >
                    <PaymentSuccessScreen />
                </PrivateRoute>

                <AdminRoute 
                    path="/problemForm"
                >
                    <ProblemFormScreen />
                </AdminRoute>

                <Route
                    path="*"
                    exact
                >
                        <Page404 />
                </Route>
                
            </Switch>
        </>
    );
};

export default UserRoutes;
