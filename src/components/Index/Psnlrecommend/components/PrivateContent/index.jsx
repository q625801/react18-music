import React,{useState,useEffect} from "react"
import {PrivateContentWrapper} from "./style.js"
import {getJson} from "@/api/apiConfig";
import { getPrivateContent } from "@/api/api"
import LoadingCpn from "@/components/common/loadingcpn"
import Titlemm from "@/components/common/titlemm"
const PrivateContent = () => {
    console.log('PrivateContent render')
    const [PrivateContent,setPrivateContent] = useState([])
    useEffect(() => {
        getData()
    },[])
    function getData(){
        getJson(getPrivateContent,{},(res) =>{
            if(res.code === 200){
                setPrivateContent(res.result)
            }
        },(err) => {

        })
    }
    return <PrivateContentWrapper>
        <Titlemm title="独家放送" arrow={true}/>
        {
            PrivateContent.length > 0 ? <div className="privatecontent-section">
                {
                    PrivateContent.map((item,index) => {
                        return (
                            <div className="privatecontent-list" key={index}>
                                <div className="privatecontent-img">
                                    <img src={item.picUrl + '?param=245y140'} alt={item.picUrl}/>
                                    <div className="privatecontent-playerbtn"></div>
                                </div>
                                <div className="privatecontent-title">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div> : <LoadingCpn/>
        }
    </PrivateContentWrapper>
}

export default PrivateContent
