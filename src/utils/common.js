import { useNavigate } from "react-router-dom"
export const GoPage = (path, data) => {
    const navigation = useNavigate()
    navigation(path, {
        replace: false,
        state: {
            ...data
        }
    })
}
