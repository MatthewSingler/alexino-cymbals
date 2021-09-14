import React from "react"
import { Route } from "react-router-dom"
import { Cymbals } from "./Cymbals/Cymbals"
import { Customers } from "./Users/Users"
import { Orders } from "./Orders/Orders"




export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/cymbals">
                <Cymbals />
            </Route>
            <Route exact path="/cymbals/:cymbalId(\d+)">
                <Cymbals />
            </Route>
            <Route path="/users">
                <Customers />
            </Route>
            <Route path="/orders">
                <Orders />
            </Route>
        </>
    )
}