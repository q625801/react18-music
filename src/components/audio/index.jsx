import React,{memo,useState,useEffect} from 'react'
import {AudioWrapper} from './style'
import { useDispatch, useSelector } from 'react-redux'
const Audio = memo(() => {
    console.log('audio render')
    const {SongInfo} = useSelector(state => state.audio.audioInfo)
    console.log(SongInfo)
    const [songInfos,setSongInfos] = useState({
        SongId:'',
        SongName:'',
        SongPic:'',
        SongArtists:'',
    })
    // useEffect(() => {
    //     setSongInfo(audioInfo.SongInfo)
    // },[audioInfo.SongInfo])
    return (
        <AudioWrapper>
            <div className="player-bar">
                <div className="clear player-songinfo">
                    <div className="avatar fl">
                        <img alt="nicemusic" src={SongInfo.SongPic + '?param=100y100'} title={SongInfo.SongName} />
                    </div>
                    <div className="info fl">
                    <h2 className="ellipsis music-name">{SongInfo.SongName}</h2>
                    <div className="ellipsis author">
                        {/* <span v-for="(item,index) in SongArtists" :key="index" v-html="((index != 0) ? ' / ' : '') + '<em>'+item.name+'</em>'"></span> */}
                    </div>
                </div>
            </div>
            <div className="player-center">
                <div className="player-btn clear">
                    {/* <span className="player-prev" @click="prevSong"></span>
                    <span @click="audioplay" :className="[audiostate ? 'player-play' : 'player-stop','player-type']"></span>
                    <span className="player-next" @click="nextSong"></span> */}
                </div>
                <div id="progress-wrap" className="progress-wrap">
                    {/* <p className="current-time">{{playTime}}</p> */}
                    <div className="progress-bar-wrap">
                        {/* <div className="progress-bar" ref="barBg" @mousedown="clickBg" @touchstart="clickBg">
                            <div className="bar-inner">
                                <div className="progress" :style="{width:progressWidth+'%'}"></div>
                                <div className="progress-btn" @mousedown.stop="yuanmousedown" ref="barBgyuan" :style="{left:progressWidth+'%'}"></div>
                            </div>
                        </div> */}
                    </div>
                    {/* <p className="duration-time"> {{audioduration ? ((parseInt(audioduration / 60, 10) <= 9 ? '0' + parseInt(audioduration / 60, 10) : parseInt(audioduration / 60, 10)) + ':' + (parseInt(audioduration % 60) <= 9 ? '0' + parseInt(audioduration % 60) : parseInt(audioduration % 60))) : ''}} </p> */}
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
            <audio>您的浏览器不支持 audio 标签。</audio>
        </AudioWrapper>
    )
})

export default Audio