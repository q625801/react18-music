import React from "react"
import ReactDOM from "react-dom/client"
import "antd/dist/antd.css"
import "assets/css/reset.css"
import "assets/css/style.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import store from "@/store"
import { Provider } from "react-redux"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
