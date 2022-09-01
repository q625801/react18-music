import React from 'react'
import { PsnlrecommendWrapper } from './style'
import Banner from "./components/banner"
import RecommendAlbum from "./components/recommendalbum"
import Popularpodcast from "./components/Popularpodcast"
import PrivateContent from "./components/PrivateContent"
import NewMusic from "./components/Newmusic"
const Psnlrecommend = () => {
    console.log('psnlrecommend render')
    return (
        <PsnlrecommendWrapper>
            <Banner/>
            <RecommendAlbum/>
            <Popularpodcast/>
            <PrivateContent/>
            <NewMusic/>
        </PsnlrecommendWrapper>
    )
}

export default Psnlrecommend