import { Navigate } from "react-router-dom";

function PrivateRoute({ element: Component, redirect}) {    
    const state = false
    return state ? <Component /> : <Navigate to={redirect} />;
}

export default PrivateRoute;