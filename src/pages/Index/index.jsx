import React from "react"
import { useOutlet } from "react-router-dom"
import { IndexWrapper } from "./style"
const Index = () => {
    const outlet = useOutlet()
    return <IndexWrapper>{outlet}</IndexWrapper>
}

export default Index
