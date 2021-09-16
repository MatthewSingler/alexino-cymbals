import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export const Cymbal = () => {
    const history = useHistory()
    const [cymbals, setCymbals] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/cymbals?_sort=cymbalTypeId,size&_order=asc")
                .then(response => response.json())
                .then((cymbalsArray) => {
                    setCymbals(cymbalsArray)
                })
        },
        []
    )
   
    return (
        <>
            
            {
                cymbals.map(
                    (cymbal) => {
                        return (
                            <div key={`cymbals--${cymbal.id}`}>
                                <Link to={`/cymbals/${cymbal.id}`}>{cymbal.name}, {cymbal.size}</Link>
                        </div>
                        )}
                )
            }
        </>
    )
}