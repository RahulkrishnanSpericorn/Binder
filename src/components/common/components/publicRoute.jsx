import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem("binder-token")
                    ? (<Redirect to={{ pathname: "/dashboard" }} />)  
                    : (<Component {...props} />)
            }
        />
    );
};
export default PublicRoute;
