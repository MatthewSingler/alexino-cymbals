import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
export const Cymbal = () => {
    const history = useHistory()
    const [cymbals, setCymbals] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/cymbals")
                .then(response => response.json())
                .then((cymbalsArray) => {
                    setCymbals(cymbalsArray)
                })
        },
        []
    )
   
    return (
        <>
            <div>
                <button onClick={() => history.push("/cymbals/order")}>Purchase</button>
            </div>
            {
                cymbals.map(
                    (cymbal) => {
                        return (
                            <div key={`cymbals--${cymbal.id}`}>{cymbal.name}
                            <Link to={`/cymbals/${cymbal.id}`}>{cymbal.name}</Link>
                        </div>
                        )}
                )
            }
        </>
    )
}