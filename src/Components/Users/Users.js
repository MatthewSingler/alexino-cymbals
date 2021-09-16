import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"


export const Customers = () => {
    const [users, setUsers] = useState([])
    const currentUser = parseInt(localStorage.getItem("alexino_user"))

    const currentUserInformation = () => {
        const individualUserInfo = {
            userId: currentUser,
            userName: currentUser.name
        }
        fetch(`http://localhost:8088/users/${currentUser}`)
            .then(response => response.json())
            .then((info) => {
                setUsers(info)
            })
    }
    useEffect(
        () => {
            currentUserInformation()
        },
        [users]
    )

    return (
        <>
            
            {
                users.map(
                    (userObj) => {
                        return <div key={`customer--${userObj.id}`}>Make some noise {userObj.name}</div>
                    }
                )
            }
        </>
    )
}