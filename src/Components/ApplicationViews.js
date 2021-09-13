import React from "react"
import { Route } from "react-router-dom"
import { AlexinoCymbals } from "./AlexinoCymbals"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <CustomerList />
            </Route>
            
        </>
    )
}
