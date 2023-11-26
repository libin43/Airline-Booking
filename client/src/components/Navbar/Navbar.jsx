import {useState} from 'react'
import { Link } from 'react-router-dom'
import { userLogoutAPI } from '../../api/user'
import { useSelector } from 'react-redux/es/hooks/useSelector'


export const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const logout = async () => {
        // const res = await userLogoutAPI()
        // console.log(res,'response');
        window.location.href ="/signin"
    }
    const userName = useSelector(state => state.user.firstName)
  return (
    <>
                <nav className="navbar bg-gray-800 text-white px-5">
                <div className="nav-container flex justify-between min-h-[10vh] px-0">
                    <div onClick={handleToggle} className="toggle-container xl:hidden relative my-2 mx-2 w-20 bg-white flex  items-center rounded-md overflow-hidden">
                        <div className="arrow-container w-16 h-10 flex mx-auto">
                            <span className={`w-10 h-2 bg-blue-500 absolute rounded-full translate-y-0  ${toggle ? 'duration-700 delay-75 rotate-45  w-16 translate-y-4' : ''}`}></span>
                            <span className={`w-16 h-2 bg-blue-500 rounded-full absolute translate-y-4  ${toggle ? 'duration-500 translate-x-96' : ''}`}></span>
                            <span className={`w-10 h-2 bg-blue-500 absolute rounded-full ${toggle ? 'duration-700 delay-75 -rotate-45 translate-y-4  w-16' : 'translate-y-8'}`}></span>
                        </div>
                    </div>
                    <div className="nav-left xl:text-3xl text-xl my-auto hover:text-slate-400">
                        <Link to={'/user/home'}>
                            AirBooking
                        </Link>
                    </div>

                    <div className={`nav-center xl:static absolute z-10 xl:min-h-fit min-h-[90vh] ${toggle ? 'bg-gray-700 left-[0%] duration-300' : 'left-[-100%]'}  top-[10%] xl:w-auto w-full my-auto`}>
                        <ul className={`menu-container flex xl:flex-row flex-col gap-10 xl:p-0 py-5 ${toggle ? 'duration-1000 px-10' : ''}  text-xl`}>

                            <Link to={'/user/home'}>
                                <li className="menu-item hover:text-slate-400">Home</li>
                            </Link>

                            <Link to={'/user/appointment'}>
                                <li className="menu-item hover:text-slate-400">Booking</li>
                            </Link>

                            <li className="menu-item">About Us</li>
                        </ul>
                    </div>
                    <div className="nav-right my-auto ">
                        <ul className="personal-container flex gap-5 text-xl">
                            {/* <li className="menu-item">Notification</li> */}
                            <li className="menu-item hover:text-slate-400">{userName ? userName: ''}</li>
                            <li className="menu-item ">
                                <button className='hover:text-slate-400' onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}
