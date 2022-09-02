import React,{memo,useState,useRef,useEffect,useCallback} from 'react'
import {AudioWrapper} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setSongInfo,setAudioPlayBtn,setAudioFlag } from "./store/action"
import { Shuffle } from "@/utils/common"
import { useCallbackState } from "@/utils/hooks"
import {getJson} from "@/api/apiConfig";
import { mp3url } from "@/api/api"
const Audio = memo(() => {
    const dispatch = useDispatch()
    const {audioInfo} = useSelector(state => state.audio)
    const [audioPlayMode,setaudioPlayMode] = useState('loop')
    const [shuffleSongList,setshuffleSongList] = useState([])
    const [audiostate,setaudiostate] = useCallbackState({
        audiostate: true,
        audioduration: '',
        playTime: '00:00',
        progressWidth: '',
        touch: {},
        checkplayfirst: true,
        is_yuanmousedown: false,
    })
    console.log('audio render',audiostate)
    let SongList = JSON.stringify(audioInfo.SongList)
    const Audio = useRef(null)
    const barBg = useRef(null)
    const barBgyuan = useRef(null)
    function audioplay(){
        if(!audioInfo.audioFlag){
          return
        }
        let audio = Audio.current;
        if (audio.paused) {
            dispatch(setAudioPlayBtn(true))
        } else {
            dispatch(setAudioPlayBtn(false))
        }
    }
    function prevSong(){
        if(!audioInfo.audioFlag){
          return
        }
        if(audioPlayMode === 'loop' || audioPlayMode === 'loopone'){
          goPrevSong(SongList)
        }else{
          goPrevSong(shuffleSongList)
        }
    }
    function goPrevSong(arr){
        let SongOnIndex = arr.findIndex((v,i) => {
          return this.SongId === v.SongId
        })
        SongOnIndex--
        if(SongOnIndex === -1){
          SongOnIndex = arr.length - 1
        }
        dispatch(setSongInfo(arr[SongOnIndex]))
    }
    function nextSong(){
        if(!audioInfo.audioFlag){
          return
        }
        if(audioPlayMode === 'loop' || audioPlayMode === 'loopone'){
          goNextSong(SongList)
        }else if(audioPlayMode === 'random'){
          goNextSong(shuffleSongList)
        }
    }
    function goNextSong(arr){
        let SongOnIndex = arr.findIndex((v,i) => {
          return this.SongId === v.SongId
        })
        SongOnIndex++
        if(SongOnIndex === arr.length){
          SongOnIndex = 0
        }
        dispatch(setSongInfo(arr[SongOnIndex]))
    }
    let setProgress = useCallback((val) => {
        if (val < 0 || val > 100) {
            return
        }
        setaudiostate({
            ...audiostate,
            progressWidth: val
        })
    },[setaudiostate,audiostate])
    function yuanmousedown(){
        if(!audiostate.audioduration){
            return
        }
        setaudiostate({
            ...audiostate,
            is_yuanmousedown:true
        })
        let offsetWidth;
        document.onmousemove = (e) => {
            if (!audiostate.is_yuanmousedown){
                return false;
            }
            const left = barBg.current.offsetLeft
            setaudiostate({
                ...audiostate,
                touch:{
                    startX: e.pageX - left,
                    width: barBg.current.clientWidth
                }
            })
            // if(IsPC()){
            //     let deltaX = e.pageX - left;
            //     const width = Math.min(Math.max(0, deltaX), that.state.touch.width)
            //     offsetWidth = width / that.state.touch.width * 100
            // }
            setProgress(offsetWidth)
        };
        document.onmouseup = (ev) => {
            if(audiostate.is_yuanmousedown){
                setaudiostate({
                    ...audiostate,
                    is_yuanmousedown:false
                })
                changeTime(offsetWidth)
            }
        };
    }
    function changeTime (time) {
        const audio = Audio.current
        const current = time * audio.duration / 100
        audio.currentTime = current
    }
    function clickBg(e){
        if(!audiostate.audioduration){
            return
        }
        let left = barBg.current.offsetLeft
        let offsetWidth
        setaudiostate({
            ...audiostate,
            touch:{
                endX:e.pageX - left,
                width:barBg.current.clientWidth
            }
        },() => {
            offsetWidth = audiostate.touch.endX / audiostate.touch.width * 100;
            changeTime(offsetWidth)
        })
    }
    // function getSongInfo(audioInfo){
    //     if(!audioInfo.SongInfo.SongId){
    //         return
    //     }
    //     let that = this
    //     if(that.state.SongId === audioInfo.SongInfo.SongId){
    //         return
    //     }
    //     this.setState({
    //         SongId: audioInfo.SongInfo.SongId,
    //         SongName: newval.audioInfo.SongInfo.SongName,
    //         SongPic: newval.audioInfo.SongInfo.SongPic,
    //         SongArtists: newval.audioInfo.SongInfo.SongArtists,
    //         shuffleSongList:Shuffle(JSON.parse(JSON.stringify(store.getState().audioInfo.SongList)))
    //     },() => {
    //         this.init()
    //         if(!newval.audioInfo.audioFlag){
    //             store.dispatch(setAudioFlag(true))
    //         }
    //         this.getmusicurl(newval.audioInfo.SongInfo.SongId)
    //         this.getlyric(newval.audioInfo.SongInfo.SongId)
    //     })
    // }
    function init(){
        //重置音频属性
        setaudiostate({
            audiostate: true,
            audioduration: '',
            playTime: '00:00',
            progressWidth: '',
            touch: {},
            checkplayfirst: true,
            is_yuanmousedown: false,
        })
    }
    useEffect(() => {
        audioTimeUpdate()
        function audioTimeUpdate(){
            let audio = Audio.current;
            audio.autoplay = true;
            audio.addEventListener('timeupdate',function(){
              setTime()
            //   that.setLyric()
            });//监听播放时间
            audio.addEventListener("playing", function(){//监听播放
                setaudiostate({
                    ...audiostate,
                    audiostate:false 
                })
                console.log('audiostate false')
            });
            audio.addEventListener("pause", function(){//监听暂停
                setaudiostate({
                    ...audiostate,
                    audiostate:true 
                })
                console.log('audiostate true')
            });
            audio.addEventListener("ended", function(){//监听音频播放完毕
            //   that.refs.lyric.lineNo = 0
              if(audioPlayMode === 'loopone'){
                audio.play()
              }else{
                dispatch(setAudioPlayBtn(false))
                nextSong()
              }
            });
            audio.addEventListener("canplay", function(){//监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
                setaudiostate({
                    ...audiostate,
                    audioduration:audio.duration
                })
                console.log('加载完毕',audio.duration)
                if(audiostate.checkplayfirst){
                    setaudiostate({
                        ...audiostate,
                        checkplayfirst:false
                    })
                    dispatch(setAudioPlayBtn(true))
                }
            });
        }
        function setTime(){
            const audio = Audio.current
            let minutes,seconds
            if(audio.currentTime){
              minutes = Math.floor(audio.currentTime / 60)
              seconds = Math.floor(audio.currentTime - minutes * 60)
            }
            let minuteValue
            let secondValue
            // 进行格式转换，当分钟小于10的时候，在前面加0
            if (minutes < 10) {
              minuteValue = '0' + minutes
            } else {
              minuteValue = minutes
            }
            // 秒数的格式设置
            if (seconds < 10) {
              secondValue = '0' + seconds
            } else {
              secondValue = seconds
            }
            // 进行时间值拼接，展示到页面
            if(!minuteValue){
              minuteValue = "00"
            }
            if(!secondValue){
              secondValue = "00"
            }
            let audioTime = minuteValue + ':' + secondValue
            // setaudiostate({
            //     ...audiostate,
            //     playTime: audioTime
            // })
            // // 进度条的长度计算
            let barLength = audio.currentTime / audio.duration * 100;
            if(!audiostate.is_yuanmousedown){
              setProgress(barLength)
            }
        }
    },[])
    useEffect(() => {
        const audio = Audio.current
        if(audioInfo.audioPlayBtn){
            // 暂停中
            audio.play();
        }else{
            // 播放中
            audio.pause();
        }
    },[audioInfo.audioPlayBtn])
    useEffect(() => {
        console.log('useEffect',audioInfo)
        // setshuffleSongList(Shuffle(JSON.parse(JSON.stringify(audioInfo.SongList))))
        const audio = Audio.current;
        audio.autoplay = true;
        if(audioInfo.SongInfo.SongId){
            getmusicurl(audioInfo.SongInfo.SongId)
            // getlyric(newval.audioInfo.SongInfo.SongId)
            if(!audioInfo.audioFlag){
                dispatch(setAudioFlag(true))
            }
        }
        function getmusicurl(id){
            getJson(mp3url,{id:id},(res) => {
                if(res.data[0].url != null){
                  audio.src = res.data[0].url;
                }else{
                  // this.$message({message:'获取音源失败，自动跳转下一首！',customClass:'zZindex'});
                  // if(this.$store.getters.getSongList.length == 1){
                  //   this.$store.commit('setSongInfoInit')
                  //   this.$store.commit('setAudioFlag',false)
                  //   return
                  // }
                  // this.nextSong()
                }
            },(err) => {
        
            },false)
        }
    },[audioInfo.SongInfo.SongId])
    return (
        <AudioWrapper>
            <div className={`audio-wrap ${audioInfo.audioFlag ? '' : 'disabled'}`}>
                <div className="player-bar">
                    <div className="clear player-songinfo">
                        <div className="avatar fl">
                            <img alt="nicemusic" src={audioInfo.SongInfo.SongPic + '?param=100y100'} title={audioInfo.SongInfo.SongName} />
                        </div>
                        <div className="info fl">
                            <h2 className="ellipsis music-name">{audioInfo.SongInfo.SongName}</h2>
                            <div className="ellipsis author">
                                {audioInfo.SongInfo.SongArtists.length > 0 ? audioInfo.SongInfo.SongArtists.map((el,index) => {
                                    return <span key={el.id}>{((index !== 0) ? ' / ' : '')}<em>{el.name}</em></span>
                                }) : ''}
                            </div>
                        </div>
                    </div>
                    <div className="player-center">
                        <div className="player-btn clear">
                            <span className="player-prev" onClick={() => {prevSong()}}></span>
                            <span onClick={() => {audioplay()}} className={`${audiostate.audiostate ? 'player-play' : 'player-stop'} player-type`}></span>
                            <span className="player-next" onClick={() => {nextSong()}}></span>
                        </div>
                        <div id="progress-wrap" className="progress-wrap">
                            <p className="current-time">{audiostate.playTime}</p>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" ref={barBg} onMouseDown={() => {clickBg()}} onTouchStart={() => {clickBg()}}>
                                    <div className="bar-inner">
                                        <div className="progress" style={{width:audiostate.progressWidth+'%'}}></div>
                                        <div className="progress-btn" onMouseDown={() => {yuanmousedown()}} ref={barBgyuan} style={{left:audiostate.progressWidth+'%'}}></div>
                                    </div>
                                </div>
                            </div>
                            <p className="duration-time"> {audiostate.audioduration ? ((parseInt(audiostate.audioduration / 60, 10) <= 9 ? '0' + parseInt(audiostate.audioduration / 60, 10) : parseInt(audiostate.audioduration / 60, 10)) + ':' + (parseInt(audiostate.audioduration % 60) <= 9 ? '0' + parseInt(audiostate.audioduration % 60) : parseInt(audiostate.audioduration % 60))) : ''} </p>
                        </div>
                    </div>
                    {/* <div className="volume-wrap">
                        <div className="volume-yl" :className="{'off':VolumeSize == 0 ? true : false}" :title="volumeTitle" @click="volumeClick"></div>
                        <el-slider className="volume-slider" :show-tooltip="false" @input="changeVolume" v-model="VolumeSize"></el-slider>
                    </div>
                    <div className="bfqbox-wrap clear">
                        <span className="bflx fl" :className="[comPlayMode]" @click="changePlayMode"></span>
                        <span className="fl text" @click="if($store.state.audioInfo.audioFlag) $refs.lyric.lyricFlag = !$refs.lyric.lyricFlag;$refs.playlist.playlistFlag = false">词</span>
                        <span className="fl list" @click="if($store.state.audioInfo.audioFlag) $refs.playlist.playlistFlag = !$refs.playlist.playlistFlag;$refs.lyric.lyricFlag = false"></span>
                    </div> */}
                </div>
                <audio ref={Audio}>您的浏览器不支持 audio 标签。</audio>
            </div>
        </AudioWrapper>
    )
})

export default Audio