import React from "react"
import { Route } from "react-router-dom"
import { Checkout } from "./Checkout/Checkout"
import { Cymbal } from "./Cymbals/Cymbals"
import { EachCymbal } from "./Cymbals/SingleCymbal"

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
            <Route exact path="/orders">
                <Orders />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
        </>
    )
}