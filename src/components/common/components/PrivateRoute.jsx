import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";


class PrivateRoute extends React.Component {
    state = {
        showNav: true
    };

    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                   ( localStorage.getItem("binder-token"))  ? (
                        <Fragment>
                            <div >
                                <Header/>
                                <section class="box-ara">
                                <SideNav />
                                <Component {...props} />
                                </section>
                            </div>

                        </Fragment>
                    ) : (
                            <Redirect to={{ pathname: "/" }} />
                        )
                }
            />
        );
    }
}
export default PrivateRoute;
