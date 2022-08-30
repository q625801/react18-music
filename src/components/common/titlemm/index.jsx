import React,{memo} from "react"
import { TitlemmWrapper } from "./style"
import { useGoPage } from "utils/hooks"
const Titlemm = memo((props) => {
    console.log('Titlemm render')
    let [Gopage] = useGoPage()
    return <TitlemmWrapper>
        <span className={`title ${props.arrow ? 'arrow' : ''}`} onClick={() => {Gopage(props.href.path,props.href.query)}}>{props.title}</span>
    </TitlemmWrapper>
},() => {return true}) //需要继续深入研究react 函数组件 render行为  后续优化

export default Titlemm
