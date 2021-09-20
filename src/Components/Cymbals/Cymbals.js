import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import "./Cymbals.css"

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
            <div className="cymbals--display">

            
            {
                cymbals.map(
                    (cymbal) => {
                        return (
                            <div key={`cymbals--${cymbal.id}`}>
                                <Link className="cymbals__links" to={`/cymbals/${cymbal.id}`}>{cymbal.name}, {cymbal.size}</Link>
                                </div>
                        )}
                        )
                    }
                            </div>
        </>
    )
}