import React from "react"
import { Link } from "react-router-dom"

export const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li>
                    <Link to={"/products/p1"}>A Book</Link>
                </li>
                <li>
                    <Link to={"/products/p2"}>A Carpet</Link>
                </li>
                <li>
                    <Link to={"/products/p3"}>An Online Course</Link>
                </li>
            </ul>
        </div>
    )
}
