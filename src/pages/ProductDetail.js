import React from "react"
import { useParams } from "react-router-dom"

export const ProductDetail = () => {
    const params = useParams()
    return (
        <div>
            <h1>ProductDetail</h1>
            <p>{params.productId}</p>
        </div>
    )
}
