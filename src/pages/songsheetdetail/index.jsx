import React, { useEffect, useState } from "react"
import { SongSheetDetailWrapper } from "./style"
import { useLocation } from "react-router-dom"
import AalbumSongSheetInfo from "components/common/albumsongsheetinfo"
import MusicPlayList from "components/common/musicplaylist"
import { getJson } from "@/api/apiConfig"
import { sddetail, sdsongAll } from "@/api/api"
const SongSheetDetail = () => {
    const location = useLocation()
    console.log("SongSheetDetail render", location)
    const { state } = location
    const [childrenData, setchildrenData] = useState({ detailinfo: "" })
    console.log(childrenData)
    let getData = () => {
        return new Promise((reslove, reject) => {
            getJson(
                sddetail,
                { id: state.id },
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
                { id: state.id },
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
        Promise.all([getData(), getPlayListTrackAll()]).then((res) => {
            // state.loading = false
            let data = { ...childrenData }
            if (res[0].code == 200) {
                data.detailinfo = res[0].playlist
            }
            if (res[1].code == 200) {
                data.songlistAll = res[1].songs
            }
            setchildrenData(data)
        })
    }, [])
    return (
        <SongSheetDetailWrapper className="wrap-albumsongsheet">
            <AalbumSongSheetInfo detailinfo={childrenData.detailinfo} />
            <MusicPlayList
                stdetaildata={childrenData.detailinfo}
                stSongAll={childrenData.songlistAll}
            />
        </SongSheetDetailWrapper>
    )
}

export default SongSheetDetail
