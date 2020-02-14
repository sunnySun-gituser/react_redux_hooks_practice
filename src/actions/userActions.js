import { logoutUser } from './../../../../mern-plaid/client/src/actions/authActions';
import React from 'react';

const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}
 
export default {
    setUser,
    logOut 
}