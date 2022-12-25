import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = () => {
    const [state, dispatch] = useContext(UserContext);
    console.log("this state in private route", state);
    console.log("====================================")
    console.log("this dispatch in private route", dispatch);

    return state.isLogin ? <Outlet /> : <Navigate to='/' />
};

export default PrivateRoute;