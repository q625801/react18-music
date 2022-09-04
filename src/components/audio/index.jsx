import React, { memo, useState, useRef, useEffect, useCallback } from "react"
import { AudioWrapper } from "./style"
import { useDispatch, useSelector } from "react-redux"
import { setSongInfo, setAudioPlayBtn, setAudioFlag } from "./store/action"
import { Shuffle } from "@/utils/common"
import { Slider } from "antd"
import { useCallbackState } from "@/utils/hooks"
import { getJson } from "@/api/apiConfig"
import { mp3url } from "@/api/api"
import AudioPlaylist from "./components/audioplaylist"
import myContextContext from "./components/createContext"
const Audio = memo(() => {
    const dispatch = useDispatch()
    const { audioInfo } = useSelector((state) => state.audio)
    const [audioPlayMode, setaudioPlayMode] = useState("loop")
    const [shuffleSongList, setshuffleSongList] = useState([])
    const [audiostate, setaudiostate] = useCallbackState({
        audiostate: true,
        audioduration: "",
        progressWidth: "",
        touch: {},
        checkplayfirst: true,
        is_yuanmousedown: false
    })
    const [volumInfo, setvolumInfo] = useState({
        volumeTitle: "静音",
        VolumeSize: 100
    })
    const [playlistFlag, setplaylistFlag] = useState(false)
    const [playTime, setplayTime] = useState("00:00")
    let SongList = JSON.parse(JSON.stringify(audioInfo.SongList))
    const Audio = useRef(null)
    const barBg = useRef(null)
    const barBgyuan = useRef(null)
    function audioplay() {
        if (!audioInfo.audioFlag) {
            return
        }
        let audio = Audio.current
        if (audio.paused) {
            dispatch(setAudioPlayBtn(true))
        } else {
            dispatch(setAudioPlayBtn(false))
        }
    }
    function prevSong() {
        if (!audioInfo.audioFlag) {
            return
        }
        if (audioPlayMode === "loop" || audioPlayMode === "loopone") {
            goPrevSong(SongList)
        } else {
            goPrevSong(shuffleSongList)
        }
    }
    function goPrevSong(arr) {
        let SongOnIndex = arr.findIndex((v, i) => {
            return audioInfo.SongInfo.SongId === v.SongId
        })
        SongOnIndex--
        if (SongOnIndex === -1) {
            SongOnIndex = arr.length - 1
        }
        dispatch(setSongInfo(arr[SongOnIndex]))
    }
    function nextSong() {
        if (!audioInfo.audioFlag) {
            return
        }
        if (audioPlayMode === "loop" || audioPlayMode === "loopone") {
            goNextSong(SongList)
        } else if (audioPlayMode === "random") {
            goNextSong(shuffleSongList)
        }
    }
    function goNextSong(arr) {
        let SongOnIndex = arr.findIndex((v, i) => {
            return audioInfo.SongInfo.SongId === v.SongId
        })
        SongOnIndex++
        if (SongOnIndex === arr.length) {
            SongOnIndex = 0
        }
        dispatch(setSongInfo(arr[SongOnIndex]))
    }
    let setProgress = useCallback(
        (val) => {
            if (val < 0 || val > 100) {
                return
            }
            let data = audiostate
            data.progressWidth = val
            setaudiostate({ ...data })
        },
        [setaudiostate, audiostate]
    )
    function yuanmousedown() {
        if (!audiostate.audioduration) {
            return
        }
        let data = audiostate
        data.is_yuanmousedown = true
        setaudiostate({
            ...data
        })
        let offsetWidth
        document.onmousemove = (e) => {
            if (!audiostate.is_yuanmousedown) {
                return false
            }
            const left = barBg.current.offsetLeft
            data.touch = {
                startX:
                    e.pageX -
                    left -
                    document
                        .querySelector(".audio-wrap")
                        .getBoundingClientRect().left,
                width: barBg.current.clientWidth
            }
            setaudiostate({
                ...data
            })
            let deltaX =
                e.pageX -
                left -
                document.querySelector(".audio-wrap").getBoundingClientRect()
                    .left
            const width = Math.min(Math.max(0, deltaX), audiostate.touch.width)
            offsetWidth = (width / audiostate.touch.width) * 100
            setProgress(offsetWidth)
            changeTime(offsetWidth)
        }
        document.onmouseup = (ev) => {
            if (audiostate.is_yuanmousedown) {
                data.is_yuanmousedown = false
                setaudiostate({
                    ...data
                })
                changeTime(offsetWidth)
            }
        }
    }
    function changeTime(time) {
        const audio = Audio.current
        const current = (time * audio.duration) / 100
        audio.currentTime = current
    }
    function clickBg(e) {
        if (!audiostate.audioduration) {
            return
        }
        let left = barBg.current.offsetLeft
        let offsetWidth
        let data = audiostate
        data.touch = {
            endX:
                e.pageX -
                left -
                document.querySelector(".audio-wrap").getBoundingClientRect()
                    .left,
            width: barBg.current.clientWidth
        }
        offsetWidth = (audiostate.touch.endX / audiostate.touch.width) * 100
        changeTime(offsetWidth)
        setaudiostate({ ...data })
    }
    let timeupdate = useCallback(() => {
        let minutes, seconds
        const audio = Audio.current
        if (audio.currentTime) {
            minutes = Math.floor(audio.currentTime / 60)
            seconds = Math.floor(audio.currentTime - minutes * 60)
        }
        let minuteValue
        let secondValue
        // 进行格式转换，当分钟小于10的时候，在前面加0
        if (minutes < 10) {
            minuteValue = "0" + minutes
        } else {
            minuteValue = minutes
        }
        // 秒数的格式设置
        if (seconds < 10) {
            secondValue = "0" + seconds
        } else {
            secondValue = seconds
        }
        // 进行时间值拼接，展示到页面
        if (!minuteValue) {
            minuteValue = "00"
        }
        if (!secondValue) {
            secondValue = "00"
        }
        let audioTime = minuteValue + ":" + secondValue
        setplayTime(audioTime)
        // // 进度条的长度计算
        let barLength = (audio.currentTime / audio.duration) * 100
        if (!audiostate.is_yuanmousedown) {
            setProgress(barLength)
        }
        //   that.setLyric()
    }, [audiostate, setProgress, setaudiostate])
    function playing() {
        //监听播放
        let data = audiostate
        data.audiostate = false
        setaudiostate(data)
    }
    function pause() {
        //监听暂停
        let data = audiostate
        data.audiostate = true
        setaudiostate(data)
    }
    function ended() {
        //监听音频播放完毕
        //   that.refs.lyric.lineNo = 0
        const audio = Audio.current
        if (audioPlayMode === "loopone") {
            audio.play()
        } else {
            dispatch(setAudioPlayBtn(false))
            nextSong()
        }
    }
    function canplay() {
        //监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
        let data = audiostate
        const audio = Audio.current
        data.audioduration = audio.duration
        setaudiostate(data)
        if (audiostate.checkplayfirst) {
            data.checkplayfirst = false
            setaudiostate(data)
            dispatch(setAudioPlayBtn(true))
        }
    }
    function changeVolume(value) {
        const audio = Audio.current
        setvolumInfo({ ...volumInfo, VolumeSize: value })
        audio.volume = value / 100
    }
    function volumeClick() {
        if (!audioInfo.audioFlag) {
            return
        }
        const audio = Audio.current
        if (volumInfo.volumeTitle === "静音") {
            audio.volume = 0
            setvolumInfo({ volumeTitle: "恢复音量", VolumeSize: 0 })
        } else {
            audio.volume = 1
            setvolumInfo({ volumeTitle: "静音", VolumeSize: 100 })
        }
    }
    function changePlayMode() {
        if (!audioInfo.audioFlag) {
            return
        }
        if (audioPlayMode === "loop") {
            setaudioPlayMode("loopone")
        } else if (audioPlayMode === "loopone") {
            setaudioPlayMode("random")
        } else {
            setaudioPlayMode("loop")
        }
    }
    useEffect(() => {
        const audio = Audio.current
        audio.autoplay = true
        audio.addEventListener("timeupdate", timeupdate) //监听播放时间
        audio.addEventListener("playing", playing)
        audio.addEventListener("pause", pause)
        audio.addEventListener("ended", ended)
        audio.addEventListener("canplay", canplay)
        return () => {
            window.removeEventListener("timeupdate", timeupdate)
            window.removeEventListener("timeupdate", playing)
            window.removeEventListener("timeupdate", pause)
            window.removeEventListener("timeupdate", ended)
            window.removeEventListener("timeupdate", canplay)
        }
    }, [audiostate])
    useEffect(() => {
        const audio = Audio.current
        if (audioInfo.audioPlayBtn) {
            // 暂停中
            audio.play()
        } else {
            // 播放中
            audio.pause()
        }
    }, [audioInfo.audioPlayBtn])
    useEffect(() => {
        const audio = Audio.current
        audio.autoplay = true
        if (audioInfo.SongInfo.SongId) {
            getmusicurl(audioInfo.SongInfo.SongId)
            // getlyric(newval.audioInfo.SongInfo.SongId)
            if (!audioInfo.audioFlag) {
                dispatch(setAudioFlag(true))
            }
        }
        function getmusicurl(id) {
            getJson(
                mp3url,
                { id: id },
                (res) => {
                    if (res.data[0].url != null) {
                        audio.src = res.data[0].url
                    } else {
                        // this.$message({message:'获取音源失败，自动跳转下一首！',customClass:'zZindex'});
                        // if(this.$store.getters.getSongList.length == 1){
                        //   this.$store.commit('setSongInfoInit')
                        //   this.$store.commit('setAudioFlag',false)
                        //   return
                        // }
                        // this.nextSong()
                    }
                },
                (err) => {},
                false
            )
        }
    }, [audioInfo.SongInfo.SongId])
    useEffect(() => {
        setshuffleSongList(
            Shuffle(JSON.parse(JSON.stringify(audioInfo.SongList)))
        )
    }, [audioInfo.SongList])
    return (
        <AudioWrapper>
            <div
                className={`audio-wrap ${
                    audioInfo.audioFlag ? "" : "disabled"
                }`}
            >
                <div className="player-bar">
                    <div className="clear player-songinfo">
                        <div className="avatar fl">
                            <img
                                alt="nicemusic"
                                src={
                                    audioInfo.SongInfo.SongPic +
                                    "?param=100y100"
                                }
                                title={audioInfo.SongInfo.SongName}
                            />
                        </div>
                        <div className="info fl">
                            <h2 className="ellipsis music-name">
                                {audioInfo.SongInfo.SongName}
                            </h2>
                            <div className="ellipsis author">
                                {audioInfo.SongInfo.SongArtists.length > 0
                                    ? audioInfo.SongInfo.SongArtists.map(
                                          (el, index) => {
                                              return (
                                                  <span key={el.id}>
                                                      {index !== 0 ? " / " : ""}
                                                      <em>{el.name}</em>
                                                  </span>
                                              )
                                          }
                                      )
                                    : ""}
                            </div>
                        </div>
                    </div>
                    <div className="player-center">
                        <div className="player-btn clear">
                            <span
                                className="player-prev"
                                onClick={() => {
                                    prevSong()
                                }}
                            ></span>
                            <span
                                onClick={() => {
                                    audioplay()
                                }}
                                className={`${
                                    audiostate.audiostate
                                        ? "player-play"
                                        : "player-stop"
                                } player-type`}
                            ></span>
                            <span
                                className="player-next"
                                onClick={() => {
                                    nextSong()
                                }}
                            ></span>
                        </div>
                        <div id="progress-wrap" className="progress-wrap">
                            <p className="current-time">{playTime}</p>
                            <div className="progress-bar-wrap">
                                <div
                                    className="progress-bar"
                                    ref={barBg}
                                    onMouseDown={(e) => {
                                        clickBg(e)
                                    }}
                                    onTouchStart={(e) => {
                                        clickBg(e)
                                    }}
                                >
                                    <div className="bar-inner">
                                        <div
                                            className="progress"
                                            style={{
                                                width:
                                                    audiostate.progressWidth +
                                                    "%"
                                            }}
                                        ></div>
                                        <div
                                            className="progress-btn"
                                            onMouseDown={(e) => {
                                                e.stopPropagation()
                                                e.nativeEvent.stopImmediatePropagation()
                                                yuanmousedown()
                                            }}
                                            ref={barBgyuan}
                                            style={{
                                                left:
                                                    audiostate.progressWidth +
                                                    "%"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <p className="duration-time">
                                {" "}
                                {audiostate.audioduration
                                    ? (parseInt(
                                          audiostate.audioduration / 60,
                                          10
                                      ) <= 9
                                          ? "0" +
                                            parseInt(
                                                audiostate.audioduration / 60,
                                                10
                                            )
                                          : parseInt(
                                                audiostate.audioduration / 60,
                                                10
                                            )) +
                                      ":" +
                                      (parseInt(
                                          audiostate.audioduration % 60
                                      ) <= 9
                                          ? "0" +
                                            parseInt(
                                                audiostate.audioduration % 60
                                            )
                                          : parseInt(
                                                audiostate.audioduration % 60
                                            ))
                                    : ""}{" "}
                            </p>
                        </div>
                    </div>
                    <div className="volume-wrap">
                        <div
                            className={`${
                                volumInfo.VolumeSize === 0 ? "off" : ""
                            } volume-yl`}
                            title={volumInfo.volumeTitle}
                            onClick={() => {
                                volumeClick()
                            }}
                        ></div>
                        <div className="volume-slider">
                            <Slider
                                value={volumInfo.VolumeSize}
                                onChange={changeVolume}
                            />
                        </div>
                    </div>
                    <div className="bfqbox-wrap clear">
                        <span
                            className={`bflx fl ${
                                audioPlayMode === "loop"
                                    ? ""
                                    : audioPlayMode === "loopone"
                                    ? "loopone"
                                    : "random"
                            }`}
                            onClick={() => {
                                changePlayMode()
                            }}
                        ></span>
                        {/* <span
                            className="fl text"
                            onClick="if($store.state.audioInfo.audioFlag) $refs.lyric.lyricFlag = !$refs.lyric.lyricFlag;$refs.playlist.playlistFlag = false"
                        >
                            词
                        </span> */}
                        <span
                            className="fl list"
                            onClick={() => {
                                setplaylistFlag(!playlistFlag)
                            }}
                        ></span>
                    </div>
                </div>
                <audio ref={Audio}>您的浏览器不支持 audio 标签。</audio>
                <myContextContext.Provider value={playlistFlag}>
                    <AudioPlaylist />
                </myContextContext.Provider>
            </div>
        </AudioWrapper>
    )
})

export default Audio
