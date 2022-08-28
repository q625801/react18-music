import styled from "styled-components"
export const IndexWrapper = styled.div`
    padding: 10px 0px;
    height: 100%;
    box-sizing: border-box;
    .index-screen {
        height: 478px;
        padding: 0 30px;
        overflow-y: scroll;
        box-sizing: border-box;
        .newalbum-fixed {
            position: absolute;
            width: 50px;
            font-size: 18px;
            margin-left: 2px;
            .month {
                width: 38px;
                height: 38px;
                background: url("assets/img/datebg.png") center no-repeat;
                background-size: 100% 100%;
                text-align: center;
                line-height: 48px;
            }
            .year {
                font-size: 12px;
                padding-left: 6px;
                padding-top: 3px;
            }
        }
    }
`
