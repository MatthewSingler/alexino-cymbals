
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"

export const Orders = () => {
    const [orders, setOrders] = useState([])  //setting the initial value of my state of orders

    const currentUser = parseInt(localStorage.getItem("alexino_user"))  //had to save the current user to a variable
    

        const history = useHistory()
        const allUserOrders = () => {  //this function is fetching all the orders for the specific user, whcih we got by invoking our currentUser variable.
            return fetch(`http://localhost:8088/orders?_expand=cymbal&userId=${currentUser}`)
                .then(response => response.json())
                .then((ordersArray) => {
                    return setOrders(ordersArray)  //when this runs we are storing the orders that the user has made in orders, and it is being stored there by invoking the setOrders function.
                })
        }

        useEffect(  //our useEffect hook is calling the allUserOrders function which contains the orders the user has made, and then our hook is also taking the orderId as an arguement. When OrderId changes this useEffect run. The state has changed?
            () => {
                allUserOrders()
            },
            []
        )
        const deleteCymbal = (id) => {  //the function to delete a cymbal from orders takes an id as a parameter. We get that id from the orderObj.id that we pass it below in our function call.
        
            return fetch(`http://localhost:8088/orders/${id}`, {
                method: "DELETE"
            })
                .then(allUserOrders)  //once the fucntion is called to delete a cymbal this allUserOrders runs and is updating the state of our application b/c it is located inside of our useEffect.
        }
  
        return (
            <>
                <div>
                    <h3>Current Order Includes {`${orders.length}`} Cymbals</h3>
                    {
                        orders.map(  //we are iterating through all of the orders for the current user and displaying the properties that are on that object below using .notation
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
        )  //our onClick function above is calling the deleteCymbal fucntion and pasing the current orderObj.id as the arguement. This is what gets passed to the deleteCymbal as a parameter.
    }

