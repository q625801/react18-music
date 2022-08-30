import styled from "styled-components"
import playerdaily from "assets/img/player-daily.png"
import playerbtn2 from "assets/img/player-btn2.png"
import calendar1 from "assets/img/calendar-1.png"
import {fonthovercolor,fontcolor} from "assets/js/commoncolor.js"
export const RecommendAlbumWrapper = styled.div`
    .recommendalbum-section{
        .songsheet-list:nth-child(5n){
            margin-right: 0;
        }
        .songsheet-list{
            width:18%;
            margin-bottom:20px;
            overflow:hidden;
            cursor:pointer;
            margin-right:2.5%;
            .list-img{
                width:100%;
                height: 138px;
                display:flex;
                align-items: center;
                justify-content: center;
                position:relative;
                border-radius: 5px;
                overflow: hidden;
                .list-player{
                    width:28px;
                    height:28px;
                    position:absolute;
                    right: 10px;
                    bottom: 10px;
                    background:url(${playerdaily}) center no-repeat;
                    background-size:cover;
                    opacity:0;
                }
                .list-playCount{
                    position:absolute;
                    right:0;
                    top:0;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 24px;
                    background:url(${playerbtn2}) left center no-repeat;
                    background-size: 16px;
                    padding-left: 20px;
                    padding-right:8px;
                }
                
                .calendar{
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    display: block;
                    width: 70px;
                    height: 70px;
                    background: url(${calendar1}) center no-repeat;
                    background-size: 100%;
                    span{
                        display: block;
                        font-weight: bold;
                        padding-top: 30px;
                        text-align: center;
                        font-size: 28px;
                        color: white;
                    }
                }
            }
            .list-img:hover .list-player{
                opacity:1;
            }
            .list-title span{
                display: block;
                text-align: left;
                color:${fontcolor};
                font-size: 14px;
                line-height: 18px;
                padding-top: 8px;
                display: -webkit-box;             /*将对象转为弹性盒模型展示*/
                -webkit-box-orient: vertical;     /*设置弹性盒模型子元素的排列方式*/
                -webkit-line-clamp: 2;            /*限制文本行数*/
                overflow: hidden;                 /*超出隐藏*/
            }
            .list-title span:hover{
                color:${fonthovercolor};
            }
        }
        .songsheet-daily{
            position: relative;
            .daily-tips{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 99;
                background: rgba(0,0,0,0.5);
                color: #ffffff;
                font-size: 12px;
                padding: 8px;
                line-height: 20px;
                box-sizing: border-box;
                transform: translateY(-60px);
            }
            .daily-tips.show{
                transform: translateY(0px);
            }
        }
    }
`