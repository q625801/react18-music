import React from "react"
import { useCallbackState } from "@/utils/hooks"
import { RecommendAlbumWrapper } from "./style"
import Titlemm from "components/common/titlemm"
import indexadily from "assets/img/index-daily.jpg"
import { myDate } from "utils/common"
import { useGoPage } from "utils/hooks"
const RecommendAlbum = () => {
    console.log('recommendalbum render')
    const [dailytips,setDailytips] = useCallbackState(false)
    const today = myDate()
    const [Gopage] = useGoPage()
    let [timer,setTimer] = useCallbackState()
    const debounce = (func, delay = 300, thisArg) => {
        return (...args) => {
            clearTimeout(timer)
            timer = setTimer(setTimeout(func.bind(thisArg), delay, ...args))
        }
    }
    let leave = () => {
        if(timer){
            clearTimeout(timer)
        }
        setDailytips(false)
    }
    let enter = debounce(function(){
        setDailytips(true)
    },700)
    return <RecommendAlbumWrapper>
        <Titlemm title="推荐歌单" arrow={true} href={{path:'/index/songsheetnav',query:{cat:'流行'}}}/>
        <div className="recommendalbum-section clear">
            <div className="songsheet-list songsheet-daily fl" onMouseEnter={() => enter()} onMouseLeave={() => leave()} onClick={() => Gopage('/everydaysongrmd')}>
                <div className={`${dailytips ? 'show' : ''} daily-tips amn2`}>根据您的音乐口味生成每日更新</div>
                <div className="list-img">
                    <img src={indexadily} title="每日推荐" alt="每日推荐"/>
                    <div className="calendar">
                        <span>{Number(today.split('-')[2])}</span>
                    </div>
                    <div className="list-player amn4"></div>
                </div>
                <div className="list-title">
                    <span>每日歌曲推荐</span>
                </div>
            </div>

        </div>
    </RecommendAlbumWrapper>
}

export default RecommendAlbum
