import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import "../Cymbals/Cymbals.css"
import "./Checkout.css"

export const Checkout = () => {

    const history = useHistory()

    return (
        <>
            <section>
                <div>
                    <h3 className="checkout__message">Thank you for your order</h3>
                </div>
                <Link className="checkout__link" to={`/checkout/`}></Link>
                    <button className="return" onClick={() => history.push("/cymbals")}>Keep Shopping</button>
            </section>
        </>
    )
}