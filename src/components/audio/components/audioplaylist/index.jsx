import React, { memo, useEffect, useContext } from "react"
import { AudioPlaylistWrapper } from "./style"
import { useDispatch, useSelector } from "react-redux"
import myContextContext from "../createContext"
import { setAudioPlayBtn, setSongInfo } from "../../store/action"
const AudioPlaylist = memo(() => {
    console.log("AudioPlaylist render")
    const { audioInfo } = useSelector((state) => state.audio)
    const playlistFlag = useContext(myContextContext)
    const dispatch = useDispatch()
    function changeAudioInfo(item) {
        if (audioInfo.SongInfo.SongId != item.SongId) {
            dispatch(setSongInfo(item))
        } else {
            if (audioInfo.audioPlayBtn) {
                dispatch(setAudioPlayBtn(false))
            } else {
                dispatch(setAudioPlayBtn(true))
            }
        }
    }
    return (
        <AudioPlaylistWrapper
            className={`wrap-playlist amn6 sdwa ${playlistFlag ? "show" : ""}`}
        >
            <div className="playlist-bt">
                播放列表({audioInfo.SongList.length})
            </div>
            <div className="playlist-listbdc">
                {audioInfo.SongList.map((item) => {
                    return (
                        <div
                            key={item.SongId}
                            onClick={() => {
                                changeAudioInfo(item)
                            }}
                            className={`listbdc clear ${
                                item.SongId == audioInfo.SongInfo.SongId
                                    ? audioInfo.audioPlayBtn
                                        ? "on"
                                        : "off"
                                    : ""
                            }`}
                        >
                            <div className="fl name">{item.SongName}</div>
                            <div className="fl artists">
                                {item.SongArtists.map((el, index) => {
                                    return (
                                        <span key={el.name}>
                                            {index != 0 ? " / " : ""}
                                            <em>{el.name}</em>
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="fl time">{item.SongTime}</div>
                        </div>
                    )
                })}
            </div>
        </AudioPlaylistWrapper>
    )
})

export default AudioPlaylist
