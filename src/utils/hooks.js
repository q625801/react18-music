import { useNavigate } from "react-router-dom"
import { useState,useRef,useEffect } from "react"
import { useDispatch } from 'react-redux'
import { setSongList,setSongInfo } from "components/audio/store/action.js"
import { playtime } from "./common"
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

export const useAudioPlay = () => {
    const dispatch = useDispatch()
    let audioPlay = (SongInfo,SongList) => {
        let data = {
            SongId:SongInfo.id,
            SongName:SongInfo.name,
            SongPic:SongInfo.picUrl,
            SongArtists:SongInfo.song.artists
        }
        let arr = [];
        if(SongList && SongList.length > 0){
            SongList.forEach((item) => {
                let obj = {
                  SongId: item.id,
                  SongName: item.name,
                  SongPic: item.picUrl,
                  SongArtists: item.song.artists,
                  SongTime: playtime(item.song.bMusic.playTime)
                }
                arr.push(obj)
            })
            console.log(arr)
            dispatch(setSongList(arr))
        }
        dispatch(setSongInfo(data))
    }
    return audioPlay
}