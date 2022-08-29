import { useNavigate } from "react-router-dom"
export const useGoPage = () => {
    let navigation = useNavigate()
    let gopage = (path,data) => {
        navigation(path, {
            replace: false,
            state: {
                ...data
            }
        })
    }
    return [gopage]
}
