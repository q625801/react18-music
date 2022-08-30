import React from "react"
import { useLocation } from "react-router-dom"
const Podcast = () => {
    const location = useLocation()
    console.log('podcast render',location)
    return <div>podcast</div>
}

export default Podcast
