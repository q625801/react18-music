import React from "react"
import { useLocation } from "react-router-dom"
const Artist = () => {
    const location = useLocation()
    console.log("artist render", location)
    return <div>artist</div>
}

export default Artist
