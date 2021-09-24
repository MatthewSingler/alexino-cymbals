import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { EachCymbal } from "../Cymbals/SingleCymbal"
import "../Cymbals/Cymbals.css"
import "./Checkout.css"

export const Checkout = () => {
    const [completedOrders, setCompletions] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost8088/completedOrders?_expand=order")
                .then(res => res.json())
                .then((completedOrdersArray) => {
                    setCompletions(completedOrdersArray)
                })
        },
        []
    )
    /*const completeOrder = (id) => {
        id.preventDefault()

        const submitOrder = EachCymbal()
        const fetchOptions = {  //specifying the options we need when we post. 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submitOrder)  //can only send strings accross http.
        }
        return fetch("http://localhost:8088/completedOrders", fetchOptions)  //fetch call takes two arguements, the address and the options function.
            .then(() => {
                history.push("/completedOrders") //send user back to orders page
            })
    }*/

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