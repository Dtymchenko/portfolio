import { useAppDispatch } from './../../hooks/redux-hooks';
import FormRegAuth from './../FormRegAuth/FormRegAuth';
import { setUser } from '../../redux/slices/mainSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = (email:string, password:string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email:user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigate('/')
            })
            .catch(error => {
              alert(error)
              console.error(error)
            })
    }

  return (
    <FormRegAuth
    title='Register'
    handleClick={handleRegister}/>
  )
}

export default SignUp