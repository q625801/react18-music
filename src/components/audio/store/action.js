const setAudioPlayBtn = (data) => {
    return {
        type:'setAudioPlayBtn',
        value:data
    }
}
const setAudioFlag = (data) => {
    return {
        type:'setAudioFlag',
        value:data
    }
}
const setAudioInfo = (SongInfo,SongList) => {
    return {
        type:'setAudioInfo',
        SongInfo:SongInfo,
        SongList:SongList
    }
}
const setSongInfo = (SongInfo) => {
    return {
        type:'setSongInfo',
        value:SongInfo,
    }
}
const setSongList = (SongList) => {
    return {
        type:'setSongList',
        value:SongList,
    }
}
const setSongInfoInit = () => {
    return {
        type:'resetSongInfo',
        value:{//重置播放器的音乐数据
            SongId:'',
            SongName:'',
            SongPic:'',
            SongArtists:''
        },
    }
}
module.exports = {
    setAudioPlayBtn,setAudioFlag,setAudioInfo,setSongInfo,setSongList,setSongInfoInit
}