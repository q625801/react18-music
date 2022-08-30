import React from "react"
import { LoadingCpnWrapper } from "./style"
import loadinggif from "assets/img/loading.gif"
const LoadingCpn = () => {
    console.log('LoadingCpn render')
    return <LoadingCpnWrapper>
        <img src={loadinggif} alt="加载中" width="30"/>
        <span>加载中...</span>
    </LoadingCpnWrapper>
}

export default LoadingCpn
