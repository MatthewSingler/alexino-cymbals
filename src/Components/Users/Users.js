import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"


export const Customers = () => {
    const [users, setUsers] = useState([])

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
    useEffect(
        () => {
            const allUsers = users.map(user => user.id)
            setUsers(allUsers.join(" , "))
        }, [users]
    )

    return (
        <>
            {
                users.map(
                    (userObj) => {
                        return <div key={`customer--${userObj.id}`}>{userObj.name}</div>
                    }
                )
            }
        </>
    )
}