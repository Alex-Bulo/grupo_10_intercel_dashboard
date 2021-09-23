// import {Component} from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";

function ProtectedRoute ({component: Component, ...restOfProps}){
    let {pathname} = useLocation()
    console.log('PROUTE', pathname);
    const isAuth = localStorage.getItem('isAuth')
    return(
        isAuth === 'true' ?
            <Component {...restOfProps}/> :
            <Redirect to={{pathname:'/login', state:{from:pathname}}} />

    )

}


export default ProtectedRoute