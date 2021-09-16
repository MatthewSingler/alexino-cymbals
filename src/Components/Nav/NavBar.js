import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <div>
            <ul className="navbar">

                <li className="navbar__item active">
                    <Link className="navbar__link" to="/cymbals">Cymbals</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/orders">Order Cart</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="#"
                        onClick={
                            () => {
                                localStorage.removeItem("alexino_user")
                            }
                        }>
                        Logout</Link>
                </li>
            </ul>

        </div>
        
    )
}
