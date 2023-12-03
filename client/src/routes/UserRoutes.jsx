import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { PageNotFound } from '../pages/PageNotFound';
import { userFetchOnRefreshAPI } from '../api/user';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/reducers/userSlice';
import { UserHome } from '../pages/UserHome';

export const UserRoutes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.user.accessToken)
    const loginStatus = useSelector(state => state.user.loggedIn)
    

    const fetchUserOnReload = async () => {
      try{
        console.log('calling userFetchRefresh');
        
        const res = await userFetchOnRefreshAPI()
        console.log(res);
        switch(res.status){
          case 200:
              console.log(res.data,'DATA');
              dispatch(setUser(res.data?.user))
              break;
          default:
              break;
      }
      } catch(error) {
        console.log(error);
        
      }
    }

  
    useEffect(()=>{
        if(!token){
            fetchUserOnReload()
            console.log('CALL IN USER ROUTES');
        }
    },[token])
  return (
    <Routes>
    <Route path="/home" element={<UserHome/>}/>
    {/* <Route path="/appointment" element={<UserAppointment/>}/> */}
    <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
