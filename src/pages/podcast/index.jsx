import React from "react"
import { useLocation } from "react-router-dom"
const Podcast = () => {
    const location = useLocation()
    console.log(location)
    return <div>podcast</div>
}

export default Podcast
