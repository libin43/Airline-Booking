import React,{useState} from 'react'
import { AiTwotoneEyeInvisible } from "react-icons/ai";

export const InputField = ({name, type, value, onChange }) => {
    const [hidePassword, setHidePassword] = useState(true)
    const handleVisibility = () => {
    }
  return (
    <>
    <div className={`${type === 'password'? 'flex justify-center xl:mx-[1.4%]  w-[100%]': ''} input-container text-center`}>
        <input
        className="px-1 focus:border-blue-800 xl:bg-transparent  border border-black rounded xl:w-[60%] w-[100%] h-10 outline-none"
        type={ type ==='password' && hidePassword? 'password': 'text'}
        name={name}
        value={value}
        onChange={(e)=> onChange(e.target.value, name)}
         />
         {
            
            type === 'password' ?  <div className=""><AiTwotoneEyeInvisible onClick={()=>setHidePassword(!hidePassword)} className='w-9 h-9'/></div>: ''
         }

    </div>
    </>
  )
}
