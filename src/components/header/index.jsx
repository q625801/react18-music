import React,{memo} from "react"
import { HeaderWrapper } from "./style"
const Header = () => {
    console.log('header')
    return (
        <HeaderWrapper>
            <div className="nav-logo clear fl">
                <div className="img-logo fl">
                    <img src={require("assets/img/logo.png")} alt="logo" />
                </div>
                <div className="logo-content fl">云音乐</div>
            </div>
            <div className="nav-routersearch fl">
                <div className="routersearch-router fl">
                    {/* <span :className="['arrow left',backUrl ? 'on' : '']" @click="handleback"></span>
                <span :className="['arrow right',forwardUrl ? 'on' : '']" @click="handleforward"></span> */}
                </div>
                <div className="routersearch-search fl">
                    <div className="search-input">
                        {/* <input type="text" v-model="keywords" @focus="shinputfocus" @keyup.enter="handleSearchInput" :placeholder="defaultkeyword" inputType="search"/> */}
                    </div>
                </div>
                {/* <SearchDialog v-if="searchdialogFlag" :keywords="keywords" @searchdialogChange="hideSearchDialog"/> */}
            </div>
        </HeaderWrapper>
    )
}

export default memo(Header)
