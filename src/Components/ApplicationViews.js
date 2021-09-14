import React from "react"
import { Route } from "react-router-dom"
import { Cymbal } from "./Cymbals/Cymbals"
import { EachCymbal } from "./Cymbals/SingleCymbal"
import { Customers } from "./Users/Users"
import { Orders } from "./Orders/Orders"




export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/cymbals">
                <Cymbal />
            </Route>
            <Route exact path="/cymbals/:cymbalId(\d+)">
                <EachCymbal />
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