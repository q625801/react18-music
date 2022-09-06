import React,{memo,useState,useEffect} from "react"
import {MusicPlayListWrapper} from "./style"
import { useSelector } from "react-redux"
import { getJson } from "@/api/apiConfig"
import { songsdetail } from "@/api/api"
import { playtime } from "@/utils/common"
const MusicPlayList = memo((props) => {
    console.log('MusicPlayList render')
    console.log(props) // 'stdetaildata','stSongAll','isRank','type'
    const {stdetaildata,stSongAll} = props
    const [songlistdata,setsonglistdata] = useState([])
    const [pageArr,setpageArr] = useState({
        ArrNo:0,
        ArrSize:20,
    })
    const [trackIds,settrackIds] = useState([])
    const [pagelength,setpagelength] = useState('')
    const [PlayListId,setPlayListId] = useState('')
    let { SongInfo,audioPlayBtn } = useSelector((state) => state.audio.audioInfo)
    let getmoresong = () => {
        let prevNo = pageArr.ArrNo
        if(pageArr.ArrNo == pagelength){
            return
        }else{
            pageArr.ArrNo += pageArr.ArrSize;
            if(pageArr.ArrNo > pagelength){
                pageArr.ArrNo = pagelength
            }
        }

        let newArr = [];
        trackIds.forEach((item,index) => {
            if(index >= prevNo && index < pageArr.ArrNo){
                newArr.push(item.id);
            }
        })
        getsongdata(newArr);
    }
    let getsongdata = (data) => {
        // state.songmoreloading = true
        getJson(songsdetail,{ids:data.toString()},(res) => {
            if(res.code == 200){
                // state.songmoreloading = false
                let arr = songlistdata.concat(res.songs)
                setsonglistdata(arr)
            }            
        },(err)=>{

        },false)
    }
    useEffect(() => {
        if(stdetaildata.trackIds){
            settrackIds(stdetaildata.trackIds)
            setpagelength(stdetaildata.trackIds.length)
            setPlayListId(stdetaildata.id)
        }
    },[stdetaildata])
    useEffect(() => {
        if(stdetaildata.trackIds && stdetaildata.trackIds.length > 0){
            getmoresong()
        }
    },[trackIds])
    useEffect(() => {
        const el = document.querySelector(".wrap-everydaysongrmd") || document.querySelector(".wrap-albumsongsheet")
        const offsetHeight = el.offsetHeight
        el.onscroll = () => {
            const scrollTop = el.scrollTop
            const scrollHeight = el.scrollHeight
            console.log(offsetHeight + scrollTop - scrollHeight >= 0)
            if(offsetHeight + scrollTop - scrollHeight >= 0){
                if(songlistdata.length < trackIds.length){
                    // state.songmoreloading = true
                    getmoresong()
                }else{
                    // state.showsongmore = true
                }
            }
        }
    },[])
    return <MusicPlayListWrapper>
        <div className={`${props.isRank ? 'isRank' : ''} musicplaylist-table clear`}>
            <div className="musicplaylist-header">
                <div className="header-o">操作</div>
                <div className="header-t">标题</div>
                <div className="header-s">歌手</div>
                <div className="header-f">专辑</div>
                <div className="header-w">时间</div>
            </div>
            {
                songlistdata.map((item,index) => {
                    return (
                        <div className={`musicplaylist-list ${index%2==0?'':'bgtst'} ${item.id == SongInfo.SongId ? 'on' : ''} ${item.id == SongInfo.SongId && audioPlayBtn ? 'onPlay' : 'offPlay'}`} key={item.id} onClick="goAudioPlay(item)">
                            <div className="musicplaylist-operation clear">
                                <div className="musicplaylist-num fl">
                                    <span>{index+1 < 10 ? '0' + (index+1) : index+1}</span>
                                    <div className="musicplaylist-AudioInfoPlay fl"></div>
                                </div>
                                {
                                    trackIds && trackIds[index].ratio && props.isRank ? 
                                    <div className="musicplaylist-ratio fl">
                                        {trackIds[index].ratio + '%'}
                                    </div>
                                    : ""
                                }
                                {
                                    trackIds && !trackIds[index].ratio && props.isRank ? 
                                    <div className="musicplaylist-lr fl">
                                        <span className={`${trackIds[index].lr ? (index - trackIds[index].lr === 0 ? 'none' : (index - trackIds[index].lr < 0 ? 'up' : 'down')) : (trackIds[index].lr === 0 ? (index - trackIds[index].lr === 0 ? 'none' : (index - trackIds[index].lr < 0 ? 'up' : 'down')) : 'new')}`}></span>
                                    </div>
                                    : ""
                                }
                                
                                <div className="musicplaylist-collection fl"></div>
                                <div className="musicplaylist-download fl" onClick="download(item)"></div>
                            </div>
                            <div className="musicplaylist-name ellipsis">
                                <span>{item.name}</span>
                                <em>{item.tns && item.tns.length > 0 ? '（' + item.tns[0] + '）' : (item.alia && item.alia.length > 0 ? '（'+ item.alia[0] + '）' : '')}</em>
                            </div>
                            <div className="musicplaylist-artist ellipsis">
                                {
                                    item.ar.map((item2,index2) => {
                                        return (
                                            <span key={index2}>
                                                {index2 != 0 ? ' / ' : ''}
                                                <em onClick="goPage(router,'/artist',{id:item2.id})">{item2.name}</em>
                                            </span>
                                        )
                                    }) 
                                }
                            </div>
                            <div className="musicplaylist-album ellipsis" onClick="goPage(router,'/album',{id:item.al.id})">
                                {item.al.name}
                            </div>
                            <div className="musicplaylist-duration">{playtime(item.dt)}</div>
                        </div>
                    )
                })
            }
        </div>
        {/* <div className="musicplaylist-loading" v-show="songmoreloading">
            <LoadingCpn/>
        </div>
        <div className="musicplaylist-bottom" v-if="showsongmore">我也是有底线的</div> */}
    </MusicPlayListWrapper>
})

export default MusicPlayList
