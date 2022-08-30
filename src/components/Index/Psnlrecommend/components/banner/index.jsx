import "assets/css/swiper.min.css"
import * as Swiper from "assets/js/swiper.min.js"
import React,{useEffect} from 'react'
import { BannerWrapper } from './style'
import { getJson } from "@/api/apiConfig";
import { banner } from "@/api/api"
import { useCallbackState } from "@/utils/hooks"
import LoadingCpn from "components/common/loadingcpn"
const Banner = () => {
    console.log('Banner render')
    const [bannerArr,setbannerArr] = useCallbackState([])
    useEffect(() => {
        getbanner()
        function getbanner(){
            getJson(banner,{},(res) => {
              if(res.code === 200){
                setbannerArr(res.banners,() => {
                    swiperShow(bannerArr.length)
                })
              }  
            },(err) => {
              console.log(err)
            })
        }
    },[]) //eslint-disable-line
    function swiperShow(length){
        new Swiper('.certify .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper 
            loop: true,
            loopedSlides: length,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
            on: {
                progress: function(progress) {
                    for (let i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        var modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        var translate = slideProgress * modify * 375 + 'px';
                        var scale = 1 - Math.abs(slideProgress) / 5;
                        var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function(transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                },
                paginationRender: () => {
                    const pages = document.getElementsByClassName('swiper-pagination-bullet')
                    for(let i = 0;i < pages.length;i++){
                        pages[i].onmouseover = function(e){
                            e.target.click()
                        }
                    }
                }
            }
        })
    }
    return (
        <BannerWrapper>
            {
                bannerArr.length > 0 ? (
                    <div className="certify">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {bannerArr.map((item,index) => {
                                    return (<div className="swiper-slide" key={index}>
                                    <img src={item.imageUrl + '?param=540y200'} alt={item.imageUrl}/></div>)
                                })}
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                ) : <LoadingCpn/>
            }
        </BannerWrapper>
    )
}

export default Banner