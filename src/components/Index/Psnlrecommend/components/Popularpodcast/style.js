import styled from "styled-components"
import { hvoerbodybg,fontcolor,fonthoverauthorcolor,fontauthorcolor } from "assets/js/commoncolor.js"
import playerdaily from "assets/img/player-daily.png"
import playerbtn2 from "assets/img/player-btn2.png"
import duration from "assets/img/duration.png"
export const PopularpodcastWrapper = styled.div`
    .popularpodcat-section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .popularpodcat-list:hover{
            background:${hvoerbodybg}
        }
        .popularpodcat-list{
            width:49%;
            height:80px;
            border-radius: 3px;
            margin-bottom: 16px;
            .popularpodcat-left{
                position: relative;
                cursor: pointer;
                .popularpodcat-img{
                    width: 80px;
                    height: 80px;
                    border-radius: 3px;
                    overflow: hidden;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .popularpodcat-playerbtn{
                    width: 28px;
                    height: 28px;
                    background:url(${playerdaily}) center no-repeat;
                    background-size: 28px;
                    position: absolute;
                    right: 6px;
                    bottom: 6px;
                }
            }
            .popularpodcat-right{
                padding: 10px;
                width: calc(100% - 80px);
                height: 100%;
                box-sizing: border-box;
                .popularpodcat-title{
                    color: ${fontcolor};
                    font-size: 14px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
                .popularpodcat-category{
                    padding: 8px 0 6px 0;
                    span{
                        display: inline-block;
                        padding: 2px;
                        font-size: 12px;
                        color: rgb(127, 127, 127);
                        border: 1px solid rgb(67, 67, 67);
                    }
                }
                .popularpodcat-dj{
                    span{
                        font-size: 12px;
                        color: ${fontauthorcolor};
                        display: block;
                        line-height: 16px;
                    }
                    .popularpodcat-brand:hover{
                        color: ${fonthoverauthorcolor};
                    }
                    .popularpodcat-brand{
                        cursor: pointer;
                        max-width: 120px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    .popularpodcat-playcount{
                        background: url(${playerbtn2}) center left no-repeat;
                        background-size: 14px;
                        padding-left: 16px;
                        margin-left: 8px;
                    }
                    .popularpodcat-duration{
                        background: url(${duration}) center left no-repeat;
                        background-size: 14px;
                        padding-left: 18px;
                        margin-left:10px;
                    }
                }
            }
        }
    }
`