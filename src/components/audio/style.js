import styled from "styled-components"
import { headeraudiobg } from "assets/js/commoncolor.js"
import playerprev from "assets/img/player-prev.png"
import playerprev2 from "assets/img/player-prev2.png"
import playerbtn3 from "assets/img/player-btn3.png"
import playerstop from "assets/img/player-stop.png"
import playernext from "assets/img/player-next.png"
import playernext2 from "assets/img/player-next2.png"
import playeryl from "assets/img/player-yl.png"
import playerylo from "assets/img/player-ylo.png"
import loop from "assets/img/loop.png"
import loopone from "assets/img/loopone.png"
import suiji from "assets/img/suiji.png"
import bflist from "assets/img/bflist.png"
import playerbtn3disabled from "assets/img/player-btn3-disabled.png"
import playerprevdisabled from "assets/img/player-prev-disabled.png"
import playernextdisabled from "assets/img/player-next-disabled.png"
import loopdisabled from "assets/img/loop-disabled.png"
import looponedisabled from "assets/img/loopone-disabled.png"
import suijidisabled from "assets/img/suiji-disabled.png"
import bflistdisabled from "assets/img/bflist-disabled.png"
export const AudioWrapper = styled.div`
    .audio-wrap{
    width: 100%;
    background: ${headeraudiobg};
    right: 0;
    left: 0;
    z-index: 8000;
    border-top:1px solid rgb(67, 67, 67);
    overflow: hidden;
    }
    .player-bar{
    height: 71px;
    padding: 0 10px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    }
    .player-bar .avatar{
    width: 50px;
    border-radius: 5px;
    border-radius:5px;
    overflow:hidden;
    }
    .player-bar .info{
    width: 178px;
    padding-left: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    }
    .player-bar .info h2{
    font-size: 14px;
    color: #d6d6d6;
    margin-bottom: 8px;
    padding-top: 8px;
    }
    .player-bar .info .ellipsis.author{
    font-size: 12px;
    color: #d6d6d6;
    }
    .player-songinfo{
    width: 240px;
    }
    .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .ellipsis.music-name{
    cursor: pointer;
    }
    .ellipsis.music-name:hover{
    color: #ffffff;
    }
    .player-bar .info .ellipsis.author span ::v-deep(em){
    cursor: pointer;
    }
    .player-btn{
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 6px;
    }
    .player-btn span{
    display:block;
    cursor:pointer;
    }
    .player-btn .player-prev{
    width:20px;
    height:20px;
    background:url(${playerprev}) center no-repeat;
    background-size:13px;
    }
    .player-btn .player-prev:hover{
    background:url(${playerprev2}) center no-repeat;
    background-size:13px;
    }
    .player-btn .player-type{
    width:36px;
    height:36px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 30px;
    }
    .player-btn .player-play{
    background:url(${playerbtn3}) center no-repeat;
    background-size:11px;
    background-color: rgb(46, 46, 46);
    }
    .player-btn .player-stop{
    background:url(${playerstop}) center no-repeat;
    background-size:15px;
    background-color: rgb(46, 46, 46);
    }
    .player-btn .player-type:hover{
    background-color: rgb(211, 211, 211,.1);
    }
    .player-btn .player-next{
    width:20px;
    height:20px;
    background:url(${playernext}) center no-repeat;
    background-size:13px;
    }
    .player-btn .player-next:hover{
    background:url(${playernext2}) center no-repeat;
    background-size:13px;
    }
    .player-bar .progress-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    }
    .player-bar .progress-wrap p{
    font-size: 12px;
    color:#7f7f7f;
    }
    .player-bar .progress-wrap p.current-time{
    margin-right:12px;
    }
    .player-bar .progress-wrap p.duration-time{
    margin-left:12px;
    }
    .progress-bar-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    }
    .progress-bar{
    position: relative;
    width: 100%;
    flex: 1;
    height: 3px;
    background: rgba(0,0,0,.05);
    border-radius: 2px;
    cursor: pointer;
    }
    .progress-bar .bar-inner{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width:100%;
    background-color: #4A4A4D;
    }
    .progress-bar .bar-inner .progress{
    width: 0;
    background: #EC4141;
    height: 3px;
    border-radius: 2px;
    }
    .progress-bar .bar-inner .progress-btn{
    position: absolute;
    z-index: 100;
    left: 0;
    width: 10px;
    height: 10px;
    top: -3.5px;
    background: #EC4141;
    border-radius: 50%;
    }
    .progress-bar .bar-inner .progress-btn:after {
        position: absolute;
        content: " ";
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 6px;
        height: 6px;
        background: #EC4141;
        border-radius: 50%;
    }
    .player-bar .volume-wrap{
        width: 10%;
        margin-left: 2%;
        display: flex;
        align-items: center; 
        margin-right: 2%;
    }
    .player-bar .volume-wrap .volume-slider{
        position: relative;
        width: 100%;
        flex: 1;
    }
    .player-bar .volume-wrap .volume-yl{
    width:30px;
    height:30px;
    background:url(${playeryl}) center no-repeat;
    background-size:22px;
    cursor: pointer;
    }
    .player-bar .volume-wrap .volume-yl.off{
    background:url(${playerylo}) center no-repeat;
    background-size:21px;
    }
    .bfqbox-wrap{
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:9%;
    margin-right:1%;
    }
    .bfqbox-wrap .bflx{
    display:block;
    width:20px;
    height:20px;
    background:url(${loop}) center no-repeat;
    background-size:20px;
    cursor:pointer;
    }
    .bfqbox-wrap .bflx.loopone{
    background:url(${loopone}) center no-repeat;
    background-size:20px;
    }
    .bfqbox-wrap .bflx.random{
    background:url(${suiji}) center no-repeat;
    background-size:20px;
    }
    .bfqbox-wrap .text{
    display:block;
    font-size: 16px;
    cursor: pointer;
    color: #d3d3d3;
    padding:0 20px;
    }
    .bfqbox-wrap .list{
    display:block;
    width:20px;
    height:20px;
    background:url(${bflist}) center no-repeat;
    background-size:20px;
    cursor: pointer;
    }
    .sdwa{
    box-shadow: rgba(255,255,255,0.1) 0px -5px 8px;
    }
    .player-center{
    width: 420px;
    }
    .volume-slider .el-slider__runway{
    height:4px;
    background-color: #4A4A4D;
    }
    .volume-slider .el-slider__bar{
    height:4px;
    background-color: #EC4141;
    }
    .volume-slider .el-slider__button{
    width: 10px;
    height: 10px;
    background: #EC4141;
    border-radius: 50%;
    border: none;
    }
    .volume-slider .el-slider__button-wrapper{
    top: -7.5px;
    width: auto;
    height: auto;
    left: 100%;
    position: absolute;
    }
    .zZindex {
        z-index:10000 !important;
    }
.audio-wrap.disabled{
  .player-bar{
    .player-songinfo{
      .avatar{
        display:none;
      }
    }
    .player-center{
      .progress-bar-wrap{
        .progress-bar{
          cursor: default;
          .progress-btn{
            display:none;
          }
        }
      }
      .current-time{
        display:none;
      }
      .player-btn{
        span{
          cursor: default;
        }
        .player-play{
          background:url(${playerbtn3disabled}) center no-repeat;
          background-size:11px;
          background-color: rgb(42, 42, 45);
        }
        .player-prev{
          background:url(${playerprevdisabled}) center no-repeat;
          background-size:13px;
        }
        .player-next{
          background:url(${playernextdisabled}) center no-repeat;
          background-size:13px;
        }
      }
    }
    .volume-wrap{
      opacity: 0;
      .volume-yl{
        cursor: default;
      }
      .volume-slider{
        cursor: default;
      }
    }
    .bfqbox-wrap{
      .bflx{
        background:url(${loopdisabled}) center no-repeat;
        background-size:20px;
        cursor:default;
      }
      .bflx.loopone{
        background:url(${looponedisabled}) center no-repeat;
        background-size:20px;
      }
      .bflx.random{
        background:url(${suijidisabled}) center no-repeat;
        background-size:20px;
      }
      .text{
        cursor:default;
        color: #6f6f6f;
      }
      .list{
        background:url(${bflistdisabled}) center no-repeat;
        background-size:20px;
        cursor: default;
      }
    }
  }
}
`