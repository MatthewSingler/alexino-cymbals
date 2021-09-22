
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./Orders.css"

export const Orders = () => {
    const [orders, setOrders] = useState([])  //setting the initial value of my state of orders
    const [orderCost, addCymbalsTogether] = useState(0) 
    const currentUser = parseInt(localStorage.getItem("alexino_user"))  //had to save the current user to a variable
    
    const history = useHistory()
        
    const allUserOrders = () => {  //this function is fetching all the orders for the specific user, whcih we got by invoking our currentUser variable.
            return fetch(`http://localhost:8088/orders?_expand=cymbal&userId=${currentUser}`)
                .then(response => response.json())
                .then((ordersArray) => {
                    return setOrders(ordersArray)  //when this runs we are storing the orders that the user has made in orders, and it is being stored there by invoking the setOrders function.
                })
        }

        useEffect(  //our useEffect hook is calling the allUserOrders function which contains the orders the user has made. The state has changed?
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
    
        useEffect(  //This useEffect is an event listener that is running everytime orders is rendering?
        () => {
            const totalPrice = orders.reduce(  //It is getting the total price from our .map below since we are passing the entire orderObj as an arguement.
                (sum, currentOrder) => {  //passing sum and currentOrder as (parameters)
                    return sum + currentOrder.cymbal.price
                }
                , 0  //start at zero and add from there
            )
          addCymbalsTogether(totalPrice)  //calling addCymbalsTogether with totalprice as an arguement. totalprice is storing the orders object
        },
            [orders]  //calling orders again
        
    )
  
        return (
            <>
                <div>
                    <h3 className="current">Current Order Includes {`${orders.length}`} Cymbal(s) and Costs ${`${orderCost}`}</h3>

                    {
                        orders.map(  //we are iterating through all of the orders for the current user and displaying the properties that are on that object below using .notation
                            (orderObj) => {
                                return (
                                    <>
                                        <div className="current__cart"key={`order--${orderObj.id}`}>{orderObj.cymbal?.name}, {orderObj.cymbal?.size}, ${orderObj.cymbal.price}</div>
                                        <div>
                                            <button className="delete__button" onClick={() => deleteCymbal(orderObj.id)}>Delete</button>
                                        </div>
                                    </>
                                )
                            }
                        )
                    }
                    
                </div>
                <button className="return" onClick={() => history.push("/cymbals")}>Keep Shopping</button>
                <button className="checkout" onClick={() => history.push("/checkout")}>Checkout</button>
            </>
        )  //our onClick function above is calling the deleteCymbal fucntion and pasing the current orderObj.id as the arguement. This is what gets passed to the deleteCymbal as a parameter.
    }

