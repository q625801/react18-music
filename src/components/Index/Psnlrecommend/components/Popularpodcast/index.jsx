import React,{useState,useEffect} from "react"
import {PopularpodcastWrapper} from './style'
import {getJson} from "@/api/apiConfig";
import { getPopularPodcast } from "@/api/api"
import LoadingCpn from "components/common/loadingcpn"
import Titlemm from "components/common/titlemm"
import {playtime,formatPlaycount} from "@/utils/common"
const Popularpodcast = () => {
    console.log('Popularpodcast render')
    const [popularpodcat,setpopularpodcat] = useState([])
    useEffect(() => {
        getData()
    },[])
    function getData(){
        getJson(getPopularPodcast,{},(res) =>{
            if(res.code === 200){
                setpopularpodcat(res.result)
            }
        },(err) => {

        })
    }
    return <PopularpodcastWrapper>
        <Titlemm title="热门播客" arrow={true}/>
        {
            popularpodcat.length > 0 ? <div className="popularpodcat-section">
                {popularpodcat.map((item) => {
                    return (
                        <div className="popularpodcat-list clear" key={item.id}>
                            <div className="popularpodcat-left fl">
                                <div className="popularpodcat-img">
                                    <img src={item.picUrl + '?param=150y150'} alt={item.picUrl}/>
                                </div>
                                <div className="popularpodcat-playerbtn"></div>
                            </div>
                            <div className="popularpodcat-right clear fl">
                                <div className="popularpodcat-title">{item.name}</div>
                                <div className="popularpodcat-category"><span>{item.program.radio.category}</span></div>
                                <div className="popularpodcat-dj clear">
                                    <span className="popularpodcat-brand fl">{item.program.radio.name}</span>
                                    <span className="popularpodcat-playcount fl">{formatPlaycount(item.program.adjustedPlayCount)}</span>
                                    <span className="popularpodcat-duration fl">{playtime(item.program.duration)}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> : <LoadingCpn/>
        }
    </PopularpodcastWrapper>
}

export default Popularpodcast
