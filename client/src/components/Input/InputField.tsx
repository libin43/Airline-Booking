import React,{useState} from 'react'
import { AiTwotoneEyeInvisible } from "react-icons/ai";

export const InputField = ({name, type, value, style, onChange }) => {
    const [hidePassword, setHidePassword] = useState(true)

    const inputType = hidePassword ? type : 'text';

  return (
    <>
    <div className={`${type === 'password'? 'flex justify-center xl:mx-[1.4%]  w-[100%]': ''} input-container text-center`}>
        <input
        className={style}
        type={inputType}
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
