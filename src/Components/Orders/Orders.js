
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

export const Orders = () => {
    const [orders, setOrders] = useState([])
    const orderId = useParams()
    const currentUser = parseInt(localStorage.getItem("alexino_user"))

    const history = useHistory()
    const allUserOrders = () => {
        fetch(`http://localhost:8088/orders?_expand=cymbal&userId=${currentUser}`)
            .then(response => response.json())
            .then((ordersArray) => {
                setOrders(ordersArray)
            })
    }

    useEffect(
        () => {
            allUserOrders()
        },
        [orderId]
    )
    const deleteCymbal = (id) => {
        
        fetch(`http://localhost:8088/orders/${id}`, {
            method: "DELETE"
        })
            .then(allUserOrders())
    }

    return (
        <>
            <div>

                <h3>Current Order Includes {`${orders.length}`} cymbals</h3>
            {
                orders.map(
                    (orderObj) => {
                        return (
                         <>
                            <div key={`order--${orderObj.id}`}>{orderObj.cymbal?.name}, {orderObj.cymbal?.size}, ${orderObj.cymbal.price}</div>
                                <div>
                                <button onClick={() => deleteCymbal(orderObj.id)}>Delete</button>
                                </div>
                            </>
                        )   
                    }
                    )
                }
            </div>
        </>
    )
}

/*const deletedObj = {
    orderId: parseInt(orderId)
}
const fetchOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deletedObj)
}*/