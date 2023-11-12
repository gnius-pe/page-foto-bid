import React from "react";
import { useAuth } from "./context/authContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute (){

    const {user, isAuthenticated} = useAuth()

    if(!isAuthenticated) return <Navigate to='/login' replace/>

    return <Outlet/>;
}

export default ProtectedRoute;
