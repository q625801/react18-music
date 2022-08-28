import React, { useState } from "react"
import { MenuWrapper } from "./style"
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
                            onClick={() => setMenuOn(item.id)}
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
