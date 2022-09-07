import { Navigate } from "react-router-dom"
import Index from "pages/Index"
import Psnlrecommend from "components/Index/Psnlrecommend"
import Rankversion from "components/Index/rankversion"
import Podcast from "pages/podcast"
import Everydaysongrmd from "pages/everydaysongrmd"
import Songsheetdetail from "pages/songsheetdetail"
import Songsheetnav from "components/Index/songsheetnav"
import Artist from "pages/artist"
import Album from "pages/album"
const routes = [
    {
        path: "/",
        element: <Navigate to="/index" replace={true} />
    },
    {
        path: "/index",
        element: <Index />,
        children: [
            {
                index: true,
                element: <Psnlrecommend />
            },
            {
                path: "rankversion",
                element: <Rankversion />
            },
            {
                path: "songsheetnav",
                element: <Songsheetnav />
            }
        ]
    },
    {
        path: "/podcast",
        element: <Podcast />
    },
    {
        path: "/everydaysongrmd",
        element: <Everydaysongrmd />
    },
    {
        path: "/songsheetdetail",
        element: <Songsheetdetail />
    },
    {
        path: "/artist",
        element: <Artist />
    },
    {
        path: "/album",
        element: <Album />
    }
]

export default routes
