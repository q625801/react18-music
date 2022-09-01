import styled from "styled-components"
import { hvoerbodybg,fonthoverauthorcolor,fontauthorcolor } from "assets/js/commoncolor.js"
import playerdaily from "assets/img/player-daily.png"
import playerdailystop from "assets/img/player-daily-stop.png"
export const NewMusicWrapper = styled.div`
    padding-top: 40px;
    .newmusic-section{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .newmusic-list.on,.newmusic-list:hover{
            background: ${hvoerbodybg};
        }
        .newmusic-list{
            width: 32%;
            margin-bottom: 15px;
            .newmusic-left{
                .newmusic-img{
                    cursor: pointer;
                    width: 50px;
                    height: 50px;
                    border-radius:5px;
                    overflow: hidden;
                    position: relative;
                    .newmusic-playerbtn{
                        width: 30px;
                        height: 30px;
                        background: url(${playerdaily}) center center no-repeat;
                        background-size: 28px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        margin: auto;
                    }
                    .newmusic-playerbtn.play{
                        background: url(${playerdailystop}) center center no-repeat;
                        background-size: 28px;
                    }
                }
            }
            .newmusic-right{
                padding: 5px 0 0 8px;
                box-sizing: border-box;
                width: calc(100% - 50px);
                .newmusic-title{
                    color: #d6d6d6;
                    font-size: 13px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    em{
                        color: ${fontauthorcolor};
                    }
                }
                .newmusic-author{
                    padding-top: 10px;
                    font-size: 12px;
                    color: ${fontauthorcolor};
                    display: block;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    span{
                        ::v-deep(em){
                            cursor: pointer;
                        }
                        ::v-deep(em:hover){
                            color: ${fonthoverauthorcolor};
                        }
                    }
                }
            }
        }
    }
`