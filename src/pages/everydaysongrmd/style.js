import styled from "styled-components"
import { fontauthorcolor, fontcolor } from "assets/js/commoncolor.js"
import calendar2 from "assets/img/calendar-2.png"
export const EverydaysongrmdWrapper = styled.div`
    height: 100%;
    overflow-y: scroll;
    .everydaysongrmd-top {
        padding: 26px 30px;
        .top-daily {
            width: 80px;
            height: 80px;
            background: url(${calendar2}) center no-repeat;
            background-size: 100% 100%;
            span {
                display: block;
                text-align: center;
                font-size: 38px;
                color: #ec4141;
                font-weight: bold;
                padding-top: 32px;
            }
        }
        .top-title {
            padding-top: 22px;
            padding-left: 30px;
            span {
                display: block;
                color: ${fontcolor};
                font-weight: bold;
                font-size: 22px;
            }
            p {
                font-size: 12px;
                color: ${fontauthorcolor};
                padding-top: 8px;
            }
        }
    }
    .loading {
        padding-top: 15px;
    }
`
