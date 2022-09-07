import React, { useState } from "react"
import { IndexNavWrapper } from "./style"
import { useGoPage } from "utils/hooks"
let IndexNavList = [
    {
        id: 1,
        name: "个性推荐",
        path: "/index"
    },
    {
        id: 2,
        name: "歌单",
        path: "/index/songsheetnav"
    },
    {
        id: 3,
        name: "排行榜",
        path: "/index/rankversion"
    }
    // {
    //   id:4,
    //   name:"歌手",
    //   path:'/index/singer',
    // },
    // {
    //   id:5,
    //   name:"最新音乐",
    //   path:'/index/latestmusic'
    // },
]
const IndexNav = () => {
    console.log("IndexNav render")
    const [IndexNavOn, setIndexNavOn] = useState(1)
    const [Gopage] = useGoPage()
    return (
        <IndexNavWrapper className="clear">
            {IndexNavList.map((item) => {
                return (
                    <span
                        key={item.name}
                        className={`fl ${IndexNavOn === item.id ? "on" : ""}`}
                        onClick={() => {
                            setIndexNavOn(item.id)
                            Gopage(item.path)
                        }}
                    >
                        {item.name}
                    </span>
                )
            })}
        </IndexNavWrapper>
    )
}

export default IndexNav
