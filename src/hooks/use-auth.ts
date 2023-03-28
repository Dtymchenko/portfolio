import { useAppSelector } from "./redux-hooks"

export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.main)

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}