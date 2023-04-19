import { useAppDispatch } from './../../hooks/redux-hooks';
import FormRegAuth from './../FormRegAuth/FormRegAuth';
import { setUser } from '../../redux/slices/mainSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email:string, password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
              email:user.email,
              id: user.uid,
              token: user.refreshToken
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
    title='Login'
    handleClick={handleLogin}/>
  )
}

export default Login