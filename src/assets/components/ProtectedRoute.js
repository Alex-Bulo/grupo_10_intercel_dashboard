// import {Component} from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";

function ProtectedRoute ({component: Component, ...restOfProps}){
    let {pathname} = useLocation()

    const userID = sessionStorage.getItem('user')
    console.log(userID?true:false);
    return(
        userID ?
            <Component {...restOfProps}/> :
            <Redirect to={{pathname:'/login', state:{from:pathname}}} />

    )

}


export default ProtectedRoute