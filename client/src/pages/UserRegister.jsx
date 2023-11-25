import React, { useState } from 'react'
import signupImg from '../assets/planeSignup.gif'
import airbw from '../assets/airbw.gif'
import { InputField } from '../components/Input/InputField'
import { useForm } from '../hooks/useForm'
import { showToast } from '../utils/toast'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../components/Loader/Spinner'
import { Button } from '../components/Button/Button'
import { userRegisterAPI } from '../api/user'

export const UserRegister = () => {

    const {
        firstName,
        lastName,
        email,
        password,
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        clearForm,
        onChange,
        isSubmit,
    } = useForm();

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (isSubmit()) {
            setLoading(true)
            try {
                const body = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "password": password,
                }
                console.log(body,'bod');
                const res = await userRegisterAPI(body)
                if (res.status === 200) {
                    clearForm()
                    showToast(`${res.data?.message}`, 'success')
                    navigate('/signin')
                }

            } catch (error) {
                if (error.response?.status === 409) {
                    showToast(`${error.response.data}`, 'error')
                }

            } finally {
                setLoading(false);
            }
        }
    }

    return (

        <div className="relative">
            <div className="xl:block hidden">
                <img className="xl:w-full xl:h-screen " src={signupImg} />
            </div>
            <div className="absolute xl:top-1/2 xl:left-1/2 transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:my-0 my-16 w-[100%]">
                <div className="title">
                <h1 className="xl:text-6xl text-4xl font-serif mx-5 my-5 text-center text-indigo-950">AirBooking.com</h1>
                    <h1 className="xl:text-4xl text-2xl font-serif mx-5 my-5 text-center ">User Register</h1>
                </div>
                <form action="" className="xl:mx-52 mx-10" onSubmit={(event) => handleFormSubmit(event)}>
                    <div className="mb-5">
                        <label htmlFor="first-name" className="text-xl xl:mx-[20%]">First Name</label>
                        <InputField type="text" name="firstName" value={firstName} onChange={onChange} />
                        <span className="text-red-500 xl:mx-[20%]">{firstNameError}</span>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="last-name" className="text-xl xl:mx-[20%]">Last Name</label>
                        <InputField type="text" name="lastName" value={lastName} onChange={onChange} />
                        <span className="text-red-500 xl:mx-[20%]">{lastNameError}</span>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="text-xl xl:mx-[20%]" >Email</label>
                        <InputField type="text" name="email" value={email} onChange={onChange} />
                        <span className="text-red-500 xl:mx-[20%]">{emailError}</span>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="text-xl xl:mx-[20%]">Password</label>
                        <InputField type="password" name="password" value={password} onChange={onChange} />
                        <span className="text-red-500 xl:mx-[20%]">{passwordError}</span>
                    </div>

                    <div className="text-center mt-8">
                        {
                            loading ? <Spinner /> : <Button type="submit" style="bg-blue-600 hover:bg-blue-900 text-white w-[60%] h-10 rounded-md" name="Submit" />
                        }
                    </div>
                </form>
            </div>
        </div>
    )

}
