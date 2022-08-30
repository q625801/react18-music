import styled from "styled-components"
import arrowleft2 from "@/assets/img/arrow-left2.png"
import arrowleft from "@/assets/img/arrow-left.png"
import arrowright2 from "@/assets/img/arrow-right2.png"
import arrowright from "@/assets/img/arrow-right.png"
export const BannerWrapper = styled.div`
    width: 762px;
    height: 248px;
	box-sizing: border-box;
	padding-top: 15px;
	.certify{
		position: relative;
		width: 100%;
		height: 200px;
		.swiper-container {
			width: 100%;
			height: 100%;
			.swiper-slide{
				width: 540px;
				height: 200px;
				border-radius: 10px;
				overflow: hidden;
				.swiper-slide img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.swiper-button-prev{
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: url(${arrowleft2}) center no-repeat;
			background-color: rgba(0,0,0,0.4);
			background-size: 32px;
			display: none;
		}
		.swiper-button-prev:hover{
			background: url(${arrowleft}) center no-repeat;
			background-color: rgba(0,0,0,0.4);
			background-size: 32px;
		}
		.swiper-button-next{
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: url(${arrowright2}) center no-repeat;
			background-color: rgba(0,0,0,0.4);
			background-size: 32px;
			display: none;
		}
		.swiper-button-next:hover{
			background: url(${arrowright}) center no-repeat;
			background-color: rgba(0,0,0,0.4);
			background-size: 32px;
		}
		.swiper-pagination{
			bottom:-25px;
			left: 0;
    		right: 0;
		}
        .swiper-pagination .swiper-pagination-bullet{
            width: 6px;
            height: 6px;
            margin-right:10px;
            background-color:#e6e6e6;
        }
        .swiper-pagination .swiper-pagination-bullet:last-child{
            margin-right: 0;
        }
        .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{
            background-color:rgb(236,65,65);
        }
	}
	.certify:hover{
		.swiper-button-next,.swiper-button-prev{
			display: block;
		}
	}
`