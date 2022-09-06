import styled from "styled-components"
import { artistsonglistbg,fontauthorcolor,fontcolor,fonthoverauthorcolor,checkhvoerbg,musicNameOn } from "assets/js/commoncolor.js"
import volumeclose from "assets/img/volume-close.png"
import volume from "assets/img/volume.png"
import collection from "assets/img/collection.png"
import download from "assets/img/download.png"
import rankline from "assets/img/rankline.jpg"
import longarrowup from "assets/img/long-arrow-up.png"
import longarrowdown from "assets/img/long-arrow-down.png"
import newpng from "assets/img/new.png"
export const MusicPlayListWrapper = styled.div`
    .musicplaylist-table{
        padding-top: 8px;
        .musicplaylist-list{
            height: 35px;
            display: flex;
            align-items: center;
            width: 100%;
            background-color:${artistsonglistbg};
            cursor: pointer;
            .musicplaylist-num{
                padding-left: 20px;
                span{
                    font-size: 14px;
                    display: block;
                    width: 30px;
                    text-align: right;
                    color: ${fontauthorcolor};
                    line-height: 16px;
                }
                .musicplaylist-AudioInfoPlay{
                    width: 16px;
                    height: 16px;
                    background: url(${volume}) center center no-repeat;
                    background-size: 100% 100%;
                    display: none;
                    margin-left: 14px;
                }
            }
            .musicplaylist-name{
                width: 37%;
                padding-left: 15px;
                color: ${fontauthorcolor};
                padding-right: 7px;
                box-sizing: border-box;
                span{
                    font-size: 13px;
                    color: ${fontcolor};
                }
                em{
                    color:${fontauthorcolor};
                    font-size:13px;
                }
            }
            .musicplaylist-collection{
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-left: 10px;
                background: url(${collection}) center center no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .musicplaylist-download{
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-left: 10px;
                background: url(${download}) center center no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
            .musicplaylist-duration{
                font-size: 14px;
                color: ${fontauthorcolor};
            }
            .musicplaylist-artist{
                width: 18%;
                padding-right: 7px;
                box-sizing: border-box;
                span{
                    font-size: 14px;
                    color: ${fontauthorcolor};
                    em:hover{
                        color: ${fonthoverauthorcolor};  
                    }
                }
            }
            .musicplaylist-album{
                width: 24%;
                font-size: 14px;
                color: ${fontauthorcolor};
                padding-right: 7px;
                box-sizing: border-box;
            }
            .musicplaylist-album:hover{
                color: ${fonthoverauthorcolor};
            }
            .ellipsis{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
            .musicplaylist-ratio{
                font-size: 12px;
                color: ${fontauthorcolor};
                line-height: 16px;
                padding-left: 10px;
                text-align: center;
                font-weight: bold;
                width: 30px;
            }
            .musicplaylist-lr{
                padding-left: 16px;
                span{
                    width: 23px;
                    height: 16px;
                    display: block;
                }
                .none{
                    background: url(${rankline}) center no-repeat;
                    background-size: 8px 2px
                }
                .up{
                    background: url(${longarrowup}) center no-repeat;
                    background-size: 8px;
                }
                .down{
                    background: url(${longarrowdown}) center no-repeat;
                    background-size: 8px;
                }
                .new{
                    background: url(${newpng}) center no-repeat;
                    background-size: 23px;
                }
            }
        }
        .musicplaylist-list.bgtst{
            background-color:transparent;
        }
        .musicplaylist-list:hover{
            background-color:${checkhvoerbg};
        }
        .musicplaylist-list.on{
            .musicplaylist-name{
                span{
                    color: ${musicNameOn};
                }
            }
        }
        .musicplaylist-list.on.onPlay{
            .musicplaylist-num{
                span{
                    display: none;
                }
                .musicplaylist-AudioInfoPlay{
                    display:block;
                }
            }
        }
        .musicplaylist-list.on.offPlay{
            .musicplaylist-num{
                span{
                    display: none;
                }
                .musicplaylist-AudioInfoPlay{
                    display:block;
                    background: url(${volumeclose}) center center no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
    }
    .musicplaylist-header{
        height: 35px;
        display: flex;
        align-items: center;
        width: 100%;
        div{
            font-size: 14px;
            color: ${fontauthorcolor};
        }
        .header-o{
            width: 12.5%;
            box-sizing: border-box;
            padding-left: 7%;
        }
        .header-t{
            width: 37%;
            padding-left: 15px;
            padding-right: 7px;
            box-sizing: border-box;
        }
        .header-s{
            width: 18%;
            padding-right: 7px;
            box-sizing: border-box;
        }
        .header-f{
            width: 24%;
            padding-right: 7px;
            box-sizing: border-box;
        }
    }
    
    .musicplaylist-table.isRank{
        .musicplaylist-header{
            .header-o{
                width: 15.3%;
                padding-left: 9%;
            }
            .header-t{
                padding-left: 32px;
                width: 35%;
            }
        }
        .musicplaylist-list{
            .musicplaylist-name{
                width: 33%;
            }
        }
    }
    .musicplaylist-loading{
        padding: 15px 0;
    }
    .musicplaylist-bottom{
        padding: 20px 0;
        text-align: center;
        color: #D6D6D6;
        font-size: 14px;
    }
`