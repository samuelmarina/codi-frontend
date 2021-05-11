import React from 'react';
import PropTypes from 'prop-types';

import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) =>{

    return(
        <Route {...rest}
            component = {(props) => (
                (isAuthenticated)
                    ? (<Redirect to = "/support"/>)
                    : (<Component {...props} />)
            )}
        />
    )
}

PublicRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute;