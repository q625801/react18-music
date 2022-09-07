import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/router"
import Header from "components/header"
import Audio from "components/audio"
import Menu from "components/Menu"
import styled from "styled-components"
const AppWrapper = styled.div`
    width: 1022px;
    height: 670px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    color: #d0d0d0;
    .international-home {
        height: 538px;
        background: #ffffff;
        display: flex;
        .home-menu {
            width: 200px;
        }
        .home-screen {
            flex: 1;
            background-color: rgb(43, 43, 43);
        }
    }
`
function App() {
    const element = useRoutes(routes)
    console.log("app render")
    return (
        <AppWrapper>
            <Header />
            <div className="international-home">
                <div className="home-menu">
                    <Menu />
                </div>
                <div className="home-screen">{element}</div>
            </div>
            <Audio />
        </AppWrapper>
    )
}

export default App
