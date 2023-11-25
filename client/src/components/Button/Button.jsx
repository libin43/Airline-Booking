import React from 'react'

export const Button = ({type, style, name, onClick}) => {
  return (
    <>
    <div className="btn-container">
        <button className={style} type={type} onClick={onClick}>{name}</button>
    </div>
    </>
  )
}
