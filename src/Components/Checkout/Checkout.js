import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import "../Cymbals/Cymbals.css"
import "./Checkout.css"

export const Checkout = () => {
    const [completedOrders, setCompletions] = useState([])

    useEffect(
        () => {
            fetch("http://localhost8088/completedOrders?_expand=orderId")
                .then(res => res.json())
                .then((completedOrdersArray) => {
                    setCompletions(completedOrdersArray)
                })
        },
        []
    )
    

    const history = useHistory()

    return (
        <>
            {
                completedOrders.map(
                    (data) => {
                        return <div key={`completed--${completedOrders.id}`}>{data.completedOrderId}</div>
                    }
                )
            }
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