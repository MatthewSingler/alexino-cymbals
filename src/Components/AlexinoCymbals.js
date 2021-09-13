import { Redirect, Route } from "react-router"
import { ApplicationViews } from "./ApplicationViews"
import React from "react"
import { Redirect } from "react-router"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"
import { Redirect } from "react-router"


export const Alexino = () => {
    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("alexino_user")) {
                        return (
                            <>
                                <NavBar />
                                <h1>Alexino Cymbals</h1>
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
    );
}