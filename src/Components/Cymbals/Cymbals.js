import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import "./Cymbals.css"

export const Cymbal = () => {
    const history = useHistory()
    const [cymbals, setCymbals] = useState([])  //initializing state of my cymbals. 

    useEffect(
        () => {
            fetch("http://localhost:8088/cymbals?_sort=cymbalTypeId,size&_order=asc")
                .then(response => response.json())
                .then((cymbalsArray) => {
                    setCymbals(cymbalsArray)  //cymbalsArray is what come sback from API and I am using that as an arguemtn in setCymbals to update the state of cymbals.
                })
        },
        []
    )
   
    return (
        <>
            <div className="cymbals--display">

            {
                cymbals.map(  //iterating through all the cymbals and storing each object returned in the cymbal parameter.
                    (cymbal) => {
                        return (
                            <div key={`cymbals--${cymbal.id}`}> 
                                <Link className="cymbals__links" to={`/cymbals/${cymbal.id}`}>{cymbal.name}, {cymbal.size}</Link>
                                </div>
                        )}
                    )  //taking the individual properties from the cymbal objects and displaying them using dot notation.
            }
                            </div>
        </>
    )
}