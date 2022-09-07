import styled from "styled-components"
import { fontcolor,fonthovercolor } from "assets/js/commoncolor.js"
import indexline from "assets/img/index_line.jpg"
export const SongSheetDetailWrapper = styled.div`
    padding: 30px 0 0 0;
    overflow-y: scroll;
    height: 538px;
    box-sizing: border-box;
    .albumsongsheet-tabs{
        padding: 30px 30px 5px 38px;
        span{
            display: block;
            color: ${fontcolor};
            margin-right: 20px;
            cursor: pointer;
            line-height: 40px;
            font-size: 14px;
        }
        span:hover{
            color: ${fonthovercolor};
        }
        span.on{
            font-size: 18px;
            font-weight: bold;
            color: ${fontcolor};
            background: url(${indexline}) bottom center no-repeat;
            background-size: 75% 3px;
        }
    }
`