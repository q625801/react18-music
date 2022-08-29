import React, { useState,memo } from "react"
import { MenuWrapper } from "./style"
import { useGoPage } from "utils/hooks"
const Menu = () => {
    let MenuList = [
        {
            id: 1,
            name: "发现音乐",
            path: "/index"
        },
        {
            id: 2,
            name: "播客",
            path: "/podcast"
        }
    ]
    const [MenuOn, setMenuOn] = useState(1)
    let [Gopage] = useGoPage()
    console.log('menu2')
    return (
        <MenuWrapper className="clear">
            <div className="primary-menu">
                {MenuList.map((item) => {
                    return (
                        <span
                            className={`menu-list ${
                                MenuOn === item.id ? "on" : ""
                            }`}
                            key={item.name}
                            onClick={() => {setMenuOn(item.id);Gopage(item.path,{})}}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>
        </MenuWrapper>
    )
}

export default Menu
