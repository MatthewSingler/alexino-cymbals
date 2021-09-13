import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/orders")
                .then(response => response.json())
                .then((ordersArray) => {
                    setOrders(ordersArray)
                })
        },
        []
    )
    useEffect(
        () => {
            const allOrders = orders.map(order => order.id)
            setOrders(allOrders.join(" , "))
        }, [orders]
    )

    return (
        <>
            {
                orders.map(
                    (orderObj) => {
                        return <div key={`order--${orderObj.id}`}>{orderObj.name}</div>
                    }
                )
            }
        </>
    )
}