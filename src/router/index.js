import { Navigate } from "react-router-dom"
import Index from "pages/Index"
import Psnlrecommend from "components/Index/Psnlrecommend"
import Rankversion from "components/Index/Rankversion"
import Podcast from "pages/podcast"
import Everydaysongrmd from "pages/everydaysongrmd"
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
    }
]

export default routes
