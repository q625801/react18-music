import React,{useState,useEffect} from "react"
import { NewMusicWrapper } from "./style";
import {getJson} from "@/api/apiConfig";
import { newsong } from "@/api/api"
import LoadingCpn from "@/components/common/loadingcpn"
import Titlemm from "@/components/common/titlemm"
import { useAudioPlay } from "@/utils/hooks"
const NewMusic = () => {
    console.log('NewMusic render')
    const [newsongdata,setnewsongdata] = useState([])
    useEffect(() => {
        getData()
    },[])
    function getData(){
        getJson(newsong,{limit:12},(res) =>{
            if(res.code === 200){
                setnewsongdata(res.result)
            }
        },(err) => {

        })
    }
    const $store = {
        state:{
            audioInfo:{
                SongInfo:{SongId:''},
                audioPlayBtn:''
            }
        }
    }
    const audioPlay = useAudioPlay()
    return <NewMusicWrapper>
        <Titlemm title="最新音乐" arrow={true}/>
        {   newsongdata.length > 0 ? <div className="newmusic-section">
            {
                newsongdata.map((item) => {
                    return (
                        <div className={`newmusic-list clear ${item.id === $store.state.audioInfo.SongInfo.SongId ? 'on' : ''}`} key={item.id} onClick={() => {audioPlay(item,newsongdata)}}>
                            <div className="newmusic-left fl">
                                <div className="newmusic-img">
                                    <img src={item.picUrl + '?param=300y300'} alt={item.picUrl}/>
                                    <div className={`newmusic-playerbtn ${item.id === $store.state.audioInfo.SongInfo.SongId ? ($store.state.audioInfo.audioPlayBtn ? 'play' : '') : ''}`}></div>
                                </div>
                            </div>
                            <div className="newmusic-right fl">
                                <div className="newmusic-title" title={item.name + `${item.song.alias.length > 0 ? '（' + item.song.alias.join(',') + '）' : (item.song.transName ? '（' + item.song.transName + '）' : '')}`}>
                                    <span>{item.name}</span>
                                    <em>{item.song.alias.length > 0 ? '（' + item.song.alias.join(',') + '）' : (item.song.transName ? '（' + item.song.transName + '）' : '')}</em>
                                </div>
                                <div className="newmusic-author">
                                    {
                                        item.song.artists.map((item,index) => {
                                            return (
                                                <span v-for="(item,index) in item.song.artists" key={index}>
                                                    {index !== 0 ? ' / ' : ''}
                                                    <em>{item.name}</em>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div> : <LoadingCpn/>
    }
    </NewMusicWrapper>
}

export default NewMusic
