import styled from "styled-components"
import playerbtn from "assets/img/player-btn.png"
import { fontcolor,fonthovercolor } from "assets/js/commoncolor.js"
export const PrivateContentWrapper = styled.div`
    .privatecontent-section{
        display: flex;
        justify-content: space-between;
        .privatecontent-list{
            width: 31.5%;
            .privatecontent-img{
                height:140px;
                border-radius: 6px;
                overflow: hidden;
                display:flex;
                justify-content: center;
                align-items: center;
                position: relative;
                cursor: pointer;
                .privatecontent-playerbtn{
                    position:absolute;
                    top: 5px;
                    left: 5px;
                    width: 30px;
                    height: 30px;
                    background: url(${playerbtn}) center no-repeat;
                    background-size:30px;
                }
            }
            .privatecontent-title{
                padding-top: 6px;
                color: ${fontcolor};
                font-size: 14px;
                line-height: 20px;
                text-align: justify;
                cursor: pointer;
            }
            .privatecontent-title:hover{
                color: ${fonthovercolor};
            }
        }
    }
`