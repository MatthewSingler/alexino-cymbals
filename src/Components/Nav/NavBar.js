import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {  //why props?
    return (
        <div>
            <ul className="navbar">

                
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/orders">Order Cart</Link>
                </li>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="#" //logout link only needs the #, not a to=""
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
