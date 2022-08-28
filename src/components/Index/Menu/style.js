import styled from "styled-components"
import {
    hvoerbodybg,
    fontcolor,
    headeraudiobg,
    fonthovercolor
} from "assets/js/commoncolor.js"
export const MenuWrapper = styled.div`
    height: 100%;
    background-color: ${headeraudiobg};
    padding: 12px;
    box-sizing: border-box;
    border-right: 1px solid rgb(67, 67, 67);
    .primary-menu {
        .menu-list {
            display: block;
            font-size: 16px;
            color: ${fontcolor};
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding: 0 0 0 8px;
            cursor: pointer;
            border-radius: 5px;
            margin-bottom: 2px;
            box-sizing: border-box;
        }
        .menu-list:hover {
            background: ${hvoerbodybg};
            color: ${fonthovercolor};
        }
        .menu-list.on {
            font-weight: bold;
            font-size: 18px;
            background: ${hvoerbodybg};
            color: ${fontcolor};
        }
    }
`
