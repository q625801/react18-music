import React, { memo, useState, useEffect } from "react"
import { MusicPlayListWrapper } from "./style"
import { useSelector } from "react-redux"
import { getJson } from "@/api/apiConfig"
import { songsdetail } from "@/api/api"
import { playtime } from "@/utils/common"
import { useAudioPlay, useGoPage } from "@/utils/hooks"
import LoadingCpn from "@/components/common/loadingcpn"
const MusicPlayList = memo((props) => {
    console.log("MusicPlayList render")
    console.log(props) // 'stdetaildata','stSongAll','isRank','type'
    const { stdetaildata, stSongAll } = props
    const [songlistdata, setsonglistdata] = useState([])
    const [pageArr, setpageArr] = useState({
        ArrNo: 0,
        ArrSize: 20
    })
    const [trackIds, settrackIds] = useState([])
    const [pagelength, setpagelength] = useState("")
    const [showsongmore, setshowsongmore] = useState(false)
    const [songmoreloading, setsongmoreloading] = useState(false)
    let { SongInfo, audioPlayBtn } = useSelector(
        (state) => state.audio.audioInfo
    )
    const audioPlay = useAudioPlay()
    const [goPage] = useGoPage()
    let getmoresong = () => {
        let prevNo = pageArr.ArrNo
        if (pageArr.ArrNo == pagelength) {
            return
        } else {
            pageArr.ArrNo += pageArr.ArrSize
            if (pageArr.ArrNo > pagelength) {
                pageArr.ArrNo = pagelength
            }
        }

        let newArr = []
        trackIds.forEach((item, index) => {
            if (index >= prevNo && index < pageArr.ArrNo) {
                newArr.push(item.id)
            }
        })
        getsongdata(newArr)
    }
    let getsongdata = (data) => {
        setsongmoreloading(true)
        getJson(
            songsdetail,
            { ids: data.toString() },
            (res) => {
                if (res.code == 200) {
                    setsongmoreloading(false)
                    let arr = songlistdata.concat(res.songs)
                    setsonglistdata(arr)
                }
            },
            (err) => {},
            false
        )
    }
    let goAudioPlay = (data) => {
        let SongInfo = {
            id: data.id,
            name: data.name,
            picUrl: data.al.picUrl,
            song: {
                artists: data.ar
            }
        }
        let arr = []
        let forArr = ""
        forArr = JSON.parse(JSON.stringify(props.stSongAll))
        forArr.forEach((item) => {
            let obj = {
                id: item.id,
                name: item.name,
                picUrl: item.al.picUrl,
                song: {
                    artists: item.ar,
                    bMusic: {
                        playTime: item.dt
                    }
                }
            }
            arr.push(obj)
        })
        audioPlay(SongInfo, arr)
    }
    let download = () => {}
    useEffect(() => {
        if (stdetaildata.trackIds) {
            settrackIds(stdetaildata.trackIds)
            setpagelength(stdetaildata.trackIds.length)
        }
    }, [stdetaildata])
    useEffect(() => {
        if (stdetaildata.trackIds && stdetaildata.trackIds.length > 0) {
            getmoresong()
        }
    }, [trackIds])
    useEffect(() => {
        const el =
            document.querySelector(".wrap-everydaysongrmd") ||
            document.querySelector(".wrap-albumsongsheet")
        const offsetHeight = el.offsetHeight
        let onscroll = () => {
            const scrollTop = el.scrollTop
            const scrollHeight = el.scrollHeight
            if (offsetHeight + scrollTop - scrollHeight >= 0) {
                // console.log(songlistdata.length,trackIds.length)
                if (songlistdata.length < trackIds.length) {
                    setsongmoreloading(true)
                    getmoresong()
                } else {
                    setshowsongmore(true)
                }
            }
        }
        el.addEventListener("scroll", onscroll)
        return () => {
            el.removeEventListener("scroll", onscroll)
        }
    }, [songlistdata, trackIds])
    return (
        <MusicPlayListWrapper>
            <div
                className={`${
                    props.isRank ? "isRank" : ""
                } musicplaylist-table clear`}
            >
                <div className="musicplaylist-header">
                    <div className="header-o">操作</div>
                    <div className="header-t">标题</div>
                    <div className="header-s">歌手</div>
                    <div className="header-f">专辑</div>
                    <div className="header-w">时间</div>
                </div>
                {songlistdata.map((item, index) => {
                    return (
                        <div
                            className={`musicplaylist-list ${
                                index % 2 == 0 ? "" : "bgtst"
                            } ${item.id == SongInfo.SongId ? "on" : ""} ${
                                item.id == SongInfo.SongId && audioPlayBtn
                                    ? "onPlay"
                                    : "offPlay"
                            }`}
                            key={item.id}
                            onClick={() => {
                                goAudioPlay(item)
                            }}
                        >
                            <div className="musicplaylist-operation clear">
                                <div className="musicplaylist-num fl">
                                    <span>
                                        {index + 1 < 10
                                            ? "0" + (index + 1)
                                            : index + 1}
                                    </span>
                                    <div className="musicplaylist-AudioInfoPlay fl"></div>
                                </div>
                                {trackIds &&
                                trackIds[index].ratio &&
                                props.isRank ? (
                                    <div className="musicplaylist-ratio fl">
                                        {trackIds[index].ratio + "%"}
                                    </div>
                                ) : (
                                    ""
                                )}
                                {trackIds &&
                                !trackIds[index].ratio &&
                                props.isRank ? (
                                    <div className="musicplaylist-lr fl">
                                        <span
                                            className={`${
                                                trackIds[index].lr
                                                    ? index -
                                                          trackIds[index].lr ===
                                                      0
                                                        ? "none"
                                                        : index -
                                                              trackIds[index]
                                                                  .lr <
                                                          0
                                                        ? "up"
                                                        : "down"
                                                    : trackIds[index].lr === 0
                                                    ? index -
                                                          trackIds[index].lr ===
                                                      0
                                                        ? "none"
                                                        : index -
                                                              trackIds[index]
                                                                  .lr <
                                                          0
                                                        ? "up"
                                                        : "down"
                                                    : "new"
                                            }`}
                                        ></span>
                                    </div>
                                ) : (
                                    ""
                                )}

                                <div className="musicplaylist-collection fl"></div>
                                <div
                                    className="musicplaylist-download fl"
                                    onClick={() => {
                                        download(item)
                                    }}
                                ></div>
                            </div>
                            <div className="musicplaylist-name ellipsis">
                                <span>{item.name}</span>
                                <em>
                                    {item.tns && item.tns.length > 0
                                        ? "（" + item.tns[0] + "）"
                                        : item.alia && item.alia.length > 0
                                        ? "（" + item.alia[0] + "）"
                                        : ""}
                                </em>
                            </div>
                            <div className="musicplaylist-artist ellipsis">
                                {item.ar.map((item2, index2) => {
                                    return (
                                        <span key={index2}>
                                            {index2 != 0 ? " / " : ""}
                                            <em
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    e.nativeEvent.stopImmediatePropagation()
                                                    goPage("/artist", {
                                                        id: item2.id
                                                    })
                                                }}
                                            >
                                                {item2.name}
                                            </em>
                                        </span>
                                    )
                                })}
                            </div>
                            <div
                                className="musicplaylist-album ellipsis"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.nativeEvent.stopImmediatePropagation()
                                    goPage("/album", { id: item.al.id })
                                }}
                            >
                                {item.al.name}
                            </div>
                            <div className="musicplaylist-duration">
                                {playtime(item.dt)}
                            </div>
                        </div>
                    )
                })}
            </div>
            {songmoreloading ? (
                <div className="musicplaylist-loading">
                    <LoadingCpn />
                </div>
            ) : (
                ""
            )}
            {showsongmore ? (
                <div className="musicplaylist-bottom">我也是有底线的</div>
            ) : (
                ""
            )}
        </MusicPlayListWrapper>
    )
})

export default MusicPlayList
