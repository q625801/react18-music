import React, { useState, useEffect } from "react"
import { EverydaysongrmdWrapper } from "./style"
import { myDate } from "@/utils/common"
import { getJson } from "@/api/apiConfig"
import { sddetail, sdsongAll } from "@/api/api"
import LoadingCpn from "components/common/loadingcpn"
import MusicPlayList from "components/common/musicplaylist"
const Everydaysongrmd = () => {
    console.log("Everydaysongrmd render")
    const [today, settoday] = useState(myDate())
    const [detailinfo, setdetailinfo] = useState({})
    const [songlistAll, setsonglistAll] = useState([])
    const [loading, setloading] = useState(false)
    let getAblbum = () => {
        return new Promise((reslove, reject) => {
            getJson(
                sddetail,
                { id: 3136952023 },
                (res) => {
                    reslove(res)
                },
                (err) => {
                    reject(err)
                }
            )
        })
    }
    let getPlayListTrackAll = () => {
        return new Promise((reslove, reject) => {
            getJson(
                sdsongAll,
                { id: 3136952023 },
                (res) => {
                    reslove(res)
                },
                (err) => {
                    reject(err)
                }
            )
        })
    }
    useEffect(() => {
        setloading(true)
        Promise.all([getAblbum(), getPlayListTrackAll()]).then((res) => {
            setloading(false)
            if (res[0].code == 200) {
                setdetailinfo(res[0].playlist)
            }
            if (res[1].code == 200) {
                setsonglistAll(res[1].songs)
            }
        })
    }, [])
    return (
        <EverydaysongrmdWrapper className="wrap-everydaysongrmd">
            <div className="everydaysongrmd-top clear">
                <div className="top-daily fl">
                    <span>{Number(today.split("-")[2])}</span>
                </div>
                <div className="top-title fl">
                    <span>每日歌曲推荐</span>
                    <p>根据你的音乐口味生成，每天6点更新</p>
                </div>
            </div>
            <MusicPlayList stdetaildata={detailinfo} stSongAll={songlistAll}/>
            {
                loading ? <div className="loading"><LoadingCpn/></div> : ''
            }
        </EverydaysongrmdWrapper>
    )
}

export default Everydaysongrmd
