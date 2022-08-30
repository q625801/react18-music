import { useNavigate } from "react-router-dom"
import { useState,useRef,useEffect } from "react"
export const useGoPage = () => {
    let navigation = useNavigate()
    let gopage = (path,data) => {
        navigation(path, {
            replace: false,
            state: {
                ...data
            }
        })
    }
    return [gopage]
}

// 封装useState的回调函数
export const useCallbackState = (od) => {
    let cbRef = useRef();
    const [data,setData] = useState(od)
    useEffect(() => {
        cbRef.current && cbRef.current(data)
    },[data])
    return [data,function(val,callback){
        cbRef.current = callback
        setData(val)
    }]
}