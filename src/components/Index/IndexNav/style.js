import styled from "styled-components"
import {
    fontcolor,
    fonthovercolor
} from "assets/js/commoncolor.js"
export const IndexNavWrapper = styled.div`
    height: 40px;
    padding: 0 30px 10px;
    span{
        display: block;
        color: ${fontcolor};
        margin-right: 20px;
        cursor: pointer;
        line-height: 40px;
    }
    span.on{
        font-size: 20px;
        font-weight: bold;
        color: ${fontcolor};
        background: url("../../assets/img/index_line.jpg") bottom center no-repeat;
        background-size: 75% 3px;
    }
    span:hover{
        color: ${fonthovercolor};
    }
`