import React from "react"
import { useLocation } from "react-router-dom"
const Album = () => {
    const location = useLocation()
    console.log("Album render", location)
    return <div>Album</div>
}

export default Album
