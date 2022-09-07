import React, { useEffect, useState } from "react"
import { AalbumSongSheetInfoWrapper } from "./style"
import { myDate, formatPlaycount } from "utils/common"
import { useGoPage, useAudioPlay } from "utils/hooks"
const AalbumSongSheetInfo = (props) => {
    console.log("AalbumSongSheetInfo render", props)
    const { detailinfo, type } = props
    const [goPage] = useGoPage()
    let infotype = type || ""
    const [playlist, setplaylist] = useState("")
    const [descriptionShow, setdescriptionShow] = useState(false)
    const audioPlay = useAudioPlay()
    let changedescription = () => {
        setdescriptionShow(!descriptionShow)
    }
    let playAll = () => {
        goAudioPlay(playlist.tracks[0])
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
        let forArr = []
        forArr = JSON.parse(JSON.stringify(playlist.tracks))
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
    useEffect(() => {
        if (detailinfo) {
            if (infotype && infotype == "album") {
            } else {
                setplaylist({
                    coverImgUrl: detailinfo.coverImgUrl,
                    name: detailinfo.name,
                    description: detailinfo.description,
                    creator: detailinfo.creator,
                    tracks: detailinfo.tracks,
                    createTime: detailinfo.createTime,
                    subscribedCount: detailinfo.subscribedCount,
                    tags: detailinfo.tags,
                    trackCount: detailinfo.trackCount,
                    playCount: detailinfo.playCount,

                    artists: [],
                    publishTime: ""
                })
            }
        }
    }, [detailinfo])
    return (
        <AalbumSongSheetInfoWrapper>
            {playlist && playlist.name ? (
                <div className="info-section clear">
                    <div className="info-img clear fl">
                        <img src={playlist.coverImgUrl + "?param=300y300"} />
                    </div>
                    <div className="info-topblk fl">
                        <div className="topblk-tagtitle clear">
                            <span className="tag fl">
                                {infotype == "album" ? "专辑" : "歌单"}
                            </span>
                            <span className="title fl">{playlist.name}</span>
                        </div>
                        {playlist.creator ? (
                            <div className="topblk-userinfo clear">
                                <div
                                    className="topblk-userinfo-img fl"
                                    onClick={() => {
                                        goPage("/userinfo", {
                                            id: playlist.creator.userId
                                        })
                                    }}
                                >
                                    <img
                                        src={
                                            playlist.creator.avatarUrl +
                                            "?param=100y100"
                                        }
                                    />
                                </div>
                                <div
                                    className="topblk-userinfo-name fl"
                                    onClick={() => {
                                        goPage("/userinfo", {
                                            id: playlist.creator.userId
                                        })
                                    }}
                                >
                                    {playlist.creator.nickname}
                                </div>
                                <div className="topblk-userinfo-createtime fl">
                                    {myDate(playlist.createTime)}创建
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="topblk-btn clear">
                            <div className="btn-playall fl clear">
                                <span
                                    className="btn-apply fl"
                                    onClick={() => {
                                        playAll()
                                    }}
                                >
                                    播放全部
                                </span>
                                <span className="btn-add fl">+</span>
                            </div>
                            {playlist.subscribedCount ? (
                                <div className="btn-fav fl">
                                    <span>
                                        收藏(
                                        {formatPlaycount(
                                            playlist.subscribedCount
                                        )}
                                        )
                                    </span>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="topblk-lable">
                            {playlist.artists.length > 0 ? (
                                <div className="lable-list clear">
                                    歌手：
                                    {playlist.artists.map((item, index) => {
                                        return (
                                            <span key={index}>
                                                {index != 0 ? " / " : ""}
                                                <em
                                                    onclick={goPage("/artist", {
                                                        id: item.id
                                                    })}
                                                >
                                                    {item.name}
                                                </em>
                                            </span>
                                        )
                                    })}
                                </div>
                            ) : (
                                ""
                            )}
                            {playlist.tags.length > 0 ? (
                                <div className="lable-list">
                                    标签：
                                    {playlist.tags.map((item, index) => {
                                        return (
                                            <span key={index}>
                                                {index != 0 ? " / " : ""}
                                                <em>{item}</em>
                                            </span>
                                        )
                                    })}
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="lable-list clear">
                                {playlist.trackCount ? (
                                    <span className="lable-t fl">
                                        歌曲：<em>{playlist.trackCount}</em>
                                    </span>
                                ) : (
                                    ""
                                )}
                                {playlist.playCount ? (
                                    <span className="lable-t fl">
                                        播放：
                                        <em>
                                            {formatPlaycount(
                                                playlist.playCount
                                            )}
                                        </em>
                                    </span>
                                ) : (
                                    ""
                                )}
                                {playlist.publishTime ? (
                                    <span className="lable-t fl">
                                        时间：
                                        <em>{myDate(playlist.publishTime)}</em>
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            {playlist.description ? (
                                <div className="lable-list">
                                    <div
                                        className={`${
                                            descriptionShow ? "on" : ""
                                        } label-des`}
                                    >
                                        <span>简介：</span>
                                        {playlist.description}
                                    </div>
                                    {playlist.description.length > 38 ? (
                                        <div
                                            className={`lable-arror amn4 ${
                                                descriptionShow ? "on" : ""
                                            }`}
                                            onClick={() => {
                                                changedescription()
                                            }}
                                        ></div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </AalbumSongSheetInfoWrapper>
    )
}

export default AalbumSongSheetInfo
