import React, { useState useEffect } from "react"
import { useParams } from "react-router"

export const cymbal = () => {
    const [ cymbal, selectCymbal ] = useState({})
    const { cymbalId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/cymbals/${cymbalId}?_expand=cymbalTypeId`)
                .then(response => response.json())
                .then((cymbalData) => {
                    selectCymbal(cymbalData)
                })
        },
        [cymbalId]
    )

    return (
        <>
            <h1>Details</h1>
            <section className="cymbal">
                <h1 className="cymbal__name">{cymbal.name}</h1>
                <div className="cymbal__size">{cymbal.size}</div>
                <div className="cymbal__weight">{cymbal.weight}</div>
                <div className="cymbal__cymbalTypeId">{cymbal.cymbalTypeId?.type}</div>
                <div className="cymbal__price">{cymbal.price}</div>
            </section>
            
        </>
    )
}