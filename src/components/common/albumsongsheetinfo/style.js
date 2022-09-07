import styled from "styled-components"
import {
    musicNameOn,
    fontcolor,
    albumsongsheetinfocolor,
    albumsongsheetinfohovercolor,
    fontauthorcolor,
    checkhvoerbg,
    bodercolor
} from "assets/js/commoncolor.js"
import arror from "assets/img/arror.png"
import collection from "assets/img/collection.png"
import playerbtn5 from "assets/img/player-btn5.png"
export const AalbumSongSheetInfoWrapper = styled.div`
    padding: 0 30px;
    .info-section {
        .info-img {
            width: 185px;
            height: 185px;
            border-radius: 7px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
        .info-topblk {
            padding-left: 20px;
            width: calc(100% - 185px);
            box-sizing: border-box;
            padding-top: 5px;
            .topblk-tagtitle {
                span {
                    display: block;
                }
                .tag {
                    color: ${musicNameOn};
                    font-size: 12px;
                    border: 1px solid ${musicNameOn};
                    padding: 3px 4px;
                    border-radius: 3px;
                }
                .title {
                    font-weight: bold;
                    color: ${fontcolor};
                    font-size: 22px;
                    padding-left: 8px;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    display: -webkit-box;
                    width: calc(100% - 34px);
                    box-sizing: border-box;
                }
            }
            .topblk-userinfo {
                padding-top: 10px;
                .topblk-userinfo-img {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .topblk-userinfo-name {
                    font-size: 12px;
                    color: ${albumsongsheetinfocolor};
                    cursor: pointer;
                    line-height: 25px;
                    padding-left: 8px;
                }
                .topblk-userinfo-name:hover {
                    color: ${albumsongsheetinfohovercolor};
                }
                .topblk-userinfo-createtime {
                    font-size: 12px;
                    color: ${fontauthorcolor};
                    line-height: 25px;
                    padding-left: 8px;
                }
            }
            .topblk-artists {
                font-size: 14px;
            }
            .topblk-btn {
                margin: 12px 0;
                .btn-playall {
                    height: 32px;
                    box-sizing: border-box;
                    width: 140px;
                    background-color: rgba(236, 65, 65, 0.9);
                    border-radius: 25px;
                    padding-left: 21px;
                    box-sizing: border-box;
                    cursor: pointer;
                    margin-right: 10px;
                    .btn-apply,
                    .btn-add {
                        color: #ffffff;
                        display: block;
                    }
                    .btn-apply {
                        width: 75%;
                        height: 32px;
                        line-height: 32px;
                        font-size: 14px;
                        background: url(${playerbtn5}) left center no-repeat;
                        background-size: 11px;
                        padding-left: 20px;
                        box-sizing: border-box;
                    }
                    .btn-add {
                        width: 25%;
                        height: 31px;
                        box-sizing: border-box;
                        border-left: 1px solid rgba(255, 255, 255, 0.2);
                        text-align: center;
                        line-height: 32px;
                        font-size: 24px;
                    }
                }
                .btn-playall:hover {
                    background-color: rgba(236, 65, 65, 0.8);
                }
                .btn-fav {
                    height: 32px;
                    font-size: 14px;
                    line-height: 32px;
                    border-radius: 25px;
                    border: 1px solid ${bodercolor};
                    padding: 0 12px;
                    cursor: pointer;
                    span {
                        display: block;
                        background: url(${collection}) left center no-repeat;
                        background-size: 16px;
                        padding-left: 20px;
                    }
                }
                .btn-fav:hover {
                    background-color: ${checkhvoerbg};
                }
            }
            .topblk-lable {
                .lable-list {
                    position: relative;
                    font-size: 13px;
                    line-height: 20px;
                    em {
                        cursor: pointer;
                        color: ${albumsongsheetinfocolor};
                    }
                    em:hover {
                        color: ${albumsongsheetinfohovercolor};
                    }
                    .lable-t {
                        margin-right: 12px;
                        em {
                            color: ${fontauthorcolor};
                            cursor: default;
                        }
                    }
                    .label-des {
                        margin-right: 12px;
                        color: ${fontauthorcolor};
                        white-space: pre-wrap;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        display: -webkit-box;
                        span {
                            color: ${fontcolor};
                        }
                    }
                    .label-des.on {
                        display: block;
                    }
                    .description {
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        display: -webkit-box;
                    }
                    .lable-arror {
                        position: absolute;
                        right: 0;
                        top: 3px;
                        width: 14px;
                        height: 14px;
                        background: url(${arror}) center no-repeat;
                        background-size: 100%;
                        cursor: pointer;
                    }
                    .lable-arror.on {
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
`
