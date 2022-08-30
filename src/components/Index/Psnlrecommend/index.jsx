import React from 'react'
import { PsnlrecommendWrapper } from './style'
import Banner from './components/banner'
import RecommendAlbum from './components/recommendalbum'
const Psnlrecommend = () => {
    console.log('psnlrecommend render')
    return (
        <PsnlrecommendWrapper>
            <Banner/>
            <RecommendAlbum/>
        </PsnlrecommendWrapper>
    )
}

export default Psnlrecommend