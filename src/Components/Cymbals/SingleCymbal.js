import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useHistory } from "react-router"
import "./Cymbals.css"

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
            <div className="cymbal__info">
                
                <section className="cymbal">
                    <h3 className="cymbal__name">{cymbal.name}</h3>
                
                
                    <div className="cymbal__video" style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        paddingTop: 25,
                        height: 0
                    }}>
                        <iframe style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                            src={cymbal.url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                        </iframe>
                    </div>
                <h2 className="specifics">Specs</h2>
                    <div className="cymbal__specs">
                        <div className="cymbal__cymbalTypeId">Type: {cymbal.cymbalType?.type}</div>
                        <div className="cymbal__size">{cymbal.size}</div>
                        <div className="cymbal__weight">{cymbal.weight}</div>
                        <div className="cymbal__price">${cymbal.price} dollars</div>
                    </div>
                <div>
                    <button className="purchase" onClick={() => purchaseCymbal()}>Purchase</button>
                </div>
                </section>
            </div>
            <button className="return" onClick={() => history.push("/cymbals")}>Check Out More Cymbals</button>
            
        </>
    )
}