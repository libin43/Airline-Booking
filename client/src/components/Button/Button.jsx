
export const Button = ({style, type, onClick, name}) => {
  return (
    <>
    <div className="btn-container">
        <button className={style} type={type} onClick={onClick}>{name}</button>
    </div>
    </>
  )
}