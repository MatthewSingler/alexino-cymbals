import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useHistory } from "react-router"
import "./Cymbals.css"

export const EachCymbal = () => {
    const [ cymbal, selectCymbal ] = useState({})  //initial state of each cymbal is an emty object.
    const { cymbalId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/cymbals/${cymbalId}?_expand=cymbalType`)  //This useEffect is returning data from API and storing it in cymbalData parameter. 
                .then(response => response.json())
                .then((cymbalData) => {
                    selectCymbal(cymbalData)  //Using the cymbalData we got from API and updating state of each cymbal with selectCymbal function.
                })
        },
        [cymbalId]  //By calling cymbalId we are targeting the individual cymbal the user clicks on.
    )
    const purchaseCymbal = () => {  //this function responsible for posting the cymbal data to our API that is gathered when the user clicks on the purchase button.
        const purchasedObj = {  //the purchaseObj includes these two properties
            cymbalId: parseInt(cymbalId),
            userId: parseInt(localStorage.getItem("alexino_user"))
        }
        const fetchOptions = {  //specifying the options we need when we post. 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchasedObj)  //can only send strings accross http.
        }
        return fetch("http://localhost:8088/orders", fetchOptions)  //fetch call takes two arguements, the address and the options function.
            .then(() => {
                history.push("/orders") //send user back to orders page
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
            <button className="return" onClick={() => history.push("/cymbals")}>More Cymbals</button>
            
        </>
    )
}