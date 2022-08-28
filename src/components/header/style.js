import styled from "styled-components"
import { headeraudiobg, searchbg, fontcolor } from "assets/js/commoncolor.js"
export const HeaderWrapper = styled.div`
    height: 60px;
    background-color: ${headeraudiobg};
    box-sizing: border-box;
    border-bottom: 2px solid rgb(148, 22, 22);
    .nav-logo {
        height: 100%;
        .img-logo {
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 20px;
            img {
                width: 35px;
                height: 35px;
            }
        }
        .logo-content {
            line-height: 58px;
            color: #ffffff;
            font-weight: bold;
            padding-left: 8px;
        }
    }
    .nav-routersearch {
        height: 100%;
        margin-left: 100px;
        position: relative;
        .routersearch-router {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .arrow {
                width: 25px;
                height: 25px;
                display: inline-block;
                margin: 0 5px;
            }
            .arrow.left {
                background: url("assets/img/arrow-left3.png") center no-repeat;
                background-size: 100%;
            }
            .arrow.left.on {
                cursor: pointer;
                background: url("assets/img/arrow-left.png") center no-repeat;
                background-size: 100%;
            }
            .arrow.right {
                background: url("assets/img/arrow-right3.png") center no-repeat;
                background-size: 100%;
            }
            .arrow.right.on {
                cursor: pointer;
                background: url("assets/img/arrow-right.png") center no-repeat;
                background-size: 100%;
            }
        }
        .routersearch-search {
            width: 160px;
            height: 32px;
            background: url("assets/img/search.png") 10px center no-repeat;
            background-size: 16px;
            background-color: ${searchbg};
            border-radius: 25px;
            margin-top: 14px;
            box-sizing: border-box;
            padding: 0 30px;
            .search-input {
                height: 100%;
                input {
                    background: transparent;
                    font-size: 12px;
                    height: 100%;
                    width: 100%;
                    color: ${fontcolor};
                }
            }
        }
    }
`
