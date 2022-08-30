import React from "react"
import { useOutlet } from "react-router-dom"
import { IndexWrapper } from "./style"
import IndexNav from "components/Index/IndexNav"
const Index = () => {
    const outlet = useOutlet()
    console.log('Index render')
    return <IndexWrapper><IndexNav/><div className="index-screen">{outlet}</div></IndexWrapper>
}

export default Index
