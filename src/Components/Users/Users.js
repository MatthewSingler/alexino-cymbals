import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"


export const Customers = () => {
    const [users, setUsers] = useState([])
const currentUser = parseInt(localStorage.getItem("alexino_user"))
    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(response => response.json())
                .then((usersArray) => {
                    setUsers(usersArray)
                })
        },
        []
    )

    return (
        <>
            {
                users.map(
                    (userObj) => {
                        if (userObj.id === currentUser) {
                            return (
                                <div className="user--message">
                                    <div key={`customer--${userObj.id}`}>Welcome {userObj.name}</div>
                                </div>

                            
                            )}

                    }
                )
            }
        </>
    )
}