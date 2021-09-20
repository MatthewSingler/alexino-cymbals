import { Redirect, Route } from "react-router"
import { ApplicationViews } from "./ApplicationViews"
import React from "react"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"
import { NavBar } from "./Nav/NavBar"
import { Customers } from "./Users/Users"
import "./AlexinoCymbals.css"

export const Alexino = () => {
    return (
        <>
           
            <Route
                render={() => {
                    if (localStorage.getItem("alexino_user")) {
                        return (
                            <>
                                <Customers />
                                <NavBar />
                                <h1 className="heading--title">Alexino Cymbals</h1>
                                <ApplicationViews />
                            </>
                        )
                    } else {
                        return <Redirect to="/login" />
                    }
                }
                }
            />
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
                   
        </>
    )
}