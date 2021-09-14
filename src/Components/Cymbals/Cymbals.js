import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const Cymbals = () => {
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
    /*useEffect(
        () => {
            const allCymbals = cymbals.map(cymbal => cymbal.id)
                setCymbals(allCymbals.join(" , "))
        }, [cymbals]
    )*/
    
    return (
        <>
            {
                cymbals.map(
                    (cymbalObj) => {
                        return <div key={`cymbal--${cymbalObj.id}`}>{cymbalObj.name}</div>
                    }
                )
            }
        </>
    )
}