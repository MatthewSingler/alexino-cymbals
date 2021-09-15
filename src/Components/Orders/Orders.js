import userEvent from "@testing-library/user-event"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Customers } from "../Users/Users"

export const Orders = () => {
    const [orders, setOrders] = useState([])
    const currentUser = parseInt(localStorage.getItem("alexino_user"))

    const history = useHistory()


    useEffect(
        () => {
            fetch(`http://localhost:8088/orders?_expand=cymbal&userId=${currentUser}`)
                .then(response => response.json())
                .then((ordersArray) => {
                    setOrders(ordersArray)
                })
        },
        []
    )

    return (
        <>
            {
                orders.map(
                    (orderObj) => {
                        return <div key={`order--${orderObj.id}`}>{orderObj.cymbal?.name}, {orderObj.cymbal?.size}, ${orderObj.cymbal.price}</div>
                    }
                )
            }
        </>
    )
}