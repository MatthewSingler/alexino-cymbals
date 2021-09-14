import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const Orders = () => {
    const [orders, setOrders] = useState([])

    const history = useHistory()


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

    const orderCart = () => {
        fetch(`http://localhost:8088/orders?_expand=cymbals&_expand=cymbalType&_expand=price`)
            .then(response => response.json())
            .then((data) => {
                setOrders(data)
            })
        orderCart()
    }

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
                        return <div key={`order--${orderObj.id}`}>{orderObj.cymbalId}</div>
                    }
                )
            }
        </>
    )
}