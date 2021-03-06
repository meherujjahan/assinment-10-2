import { Redirect, Route } from "react-router";
import UseAuth from "./UseAuth";

function PrivateRoute({ children, ...rest }) {
    let { user } = UseAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;