import styled from "styled-components"
import { fonthovercolor,fontcolor } from "assets/js/commoncolor.js"
import arrowtitle from "assets/img/arrow-title.png"
export const TitlemmWrapper = styled.div`
    margin-bottom: 5px;
	.title{
		font-size: 20px;
        font-weight: bold;
        color: ${fontcolor};
		cursor: pointer;
        line-height: 40px;
	}
	.title:hover{
		color: ${fonthovercolor};
	}
	.arrow{
		background: url(${arrowtitle}) center right no-repeat;
		background-size: 45px;
		padding-right: 35px;
	}
`