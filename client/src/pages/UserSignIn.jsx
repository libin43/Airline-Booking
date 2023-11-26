import { useState } from 'react'
import airImg from '../assets/planeSignin.png'
import { InputField } from '../components/Input/InputField'
import { Spinner } from '../components/Loader/Spinner'
import { Button } from '../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { showToast } from '../utils/toast'
import { userLoginAPI } from '../api/user'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/userSlice'

export const UserSignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clearState = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(email && password){
            const body = {
                "email": email,
                "password": password,
            }
            setLoading(true)
            try{
                const res = await userLoginAPI(body)
                switch(res.status){
                    case 200:
                        console.log(res.data,'DATA');
                        dispatch(setUser(res.data?.user))
                        clearState()
                        navigate('/user/home')
                        break;
                    default:
                        break;
                }
                
            } catch(error) {
                switch(error.response?.status){
                    case 401:
                        showToast(`${error.response.data}`,'error')
                        break;
                    default:
                        break;
                }
                
            } finally {
                setLoading(false);
              }
        } else {
            showToast('Input fields cannot be empty', 'error')
        }
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-md shadow-md w-96">
        <form onSubmit={(event) => handleSubmit(event)}>
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <div>
        <img src={airImg} alt="" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <InputField
        type="text"
        name="email"
        value={email}
        style="px-1 focus:border-blue-800 xl:bg-transparent  border border-black rounded xl:w-[71%] w-[100%] h-10 outline-none"
        onChange={(value) => setEmail((prev) => (value !== prev ? value: prev))}/>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <InputField
        type="password"
        name="password"
        value={password}
        style="px-1 focus:border-blue-800 xl:bg-transparent  border border-black rounded xl:w-[65%] w-[100%] h-10 outline-none"
        onChange={(value) => setPassword((prev) => (value !== prev ? value: prev))}/>
      </div>
      
      <div className="text-center">
          {
            loading ? <Spinner/> : <Button type="submit" style="bg-blue-600 hover:bg-blue-900 text-white w-[50%] h-10 rounded-md" name="Login"/>
          }
          </div>
          <div className="mt-10">
            <Link to={'/register'}>
            <span className="text-blue-800">Dont have an account? Signup</span>
            </Link>
        </div>
        </form>
    </div>
  </div>
  )
}
