import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useHistory } from "react-router"
import InstagramEmbed from 'react-instagram-embed';

export const EachCymbal = () => {
    const [ cymbal, selectCymbal ] = useState({})
    const { cymbalId } = useParams()
    const history = useHistory()

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
    const purchaseCymbal = () => {
        const purchasedObj = {
            cymbalId: parseInt(cymbalId),
            userId: parseInt(localStorage.getItem("alexino_user"))
        }
        const fetchOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchasedObj)
        }
        return fetch("http://localhost:8088/orders", fetchOptions)
            .then(() => {
                history.push("/orders")
            })
    }
    
    

    return (
        <>
            <h2>Specs</h2>
            <section className="cymbal">
                <h3 className="cymbal__name">{cymbal.name}</h3>
                
                
                <div className="cymbal__video">
                    <iframe src={cymbal.url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    

                </div>

                <div className="cymbal__cymbalTypeId">{cymbal.cymbalType?.type}</div>
                <div className="cymbal__size">{cymbal.size}</div>
                <div className="cymbal__weight">{cymbal.weight}</div>
                <div className="cymbal__price">${cymbal.price} dollars</div>
                <div>
                    <button onClick={() => purchaseCymbal()}>Purchase</button>
                </div>
            </section>
            <button className="return" onClick={() => history.push("/cymbals")}>Check Out More Cymbals</button>
            
        </>
    )
}