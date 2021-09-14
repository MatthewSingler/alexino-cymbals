import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useHistory } from "react-router"

export const EachCymbal = () => {
    const [ cymbal, selectCymbal ] = useState({})
    const { cymbalId } = useParams()
    const history = useHistory()
    
    const submitPurchase = (event) => {
        event.preventDefault()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/cymbals/${cymbalId}?_expand=cymbalType`)
                .then(response => response.json())
                .then((cymbalData) => {
                    selectCymbal(cymbalData)
                })
        },
        [cymbalId]
    )

    return (
        <>
            <h2>Specs</h2>
            <section className="cymbal">
                <h3 className="cymbal__name">{cymbal.name}</h3>
                <div className="cymbal__cymbalTypeId">{cymbal.cymbalType?.type}</div>
                <div className="cymbal__size">{cymbal.size}</div>
                <div className="cymbal__weight">{cymbal.weight}</div>
                <div className="cymbal__price">${cymbal.price} dollars</div>
                <div>
                    <button onClick={() => history.push("/cymbals/order")}>Purchase</button>
                </div>
            </section>
            
        </>
    )
}