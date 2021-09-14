import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const Orders = () => {
    const [orders, setOrders] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/orders", fetchOption)
                .then(() => {
                    history.push("/orders")
                }
                )
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
    const fetchOption = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newOrder)
    }

    useEffect(
        () => {
            const allOrders = orders.map(order => order.id)
            setOrders(allOrders.join(" , "))
        }, [orders]

    )
        const newOrder = { ...order }
        newOrder[idToModify] = newValue
        setOrders(newOrder)
    }

    const submitPurchase = () => {
        const newPurchase = {
            orderId: parseInt(localStorage.getItem()),
            cymbalId: parseInt(localStorage.getItem())
        }
        
            
    }


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