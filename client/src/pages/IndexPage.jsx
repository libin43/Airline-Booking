import { Link } from "react-router-dom"


export const IndexPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <h1 className="xl:text-4xl text-xl text-center mx-5 font-bold">Welcome to <span className="font-mono xl:text-6xl text-2xl">AirBooking.com</span></h1>
      <Link to={'/register'}>
        <h1 className="xl:text-2xl text-sm mx-5 animate-bounce">Please register to continue    {`>`}</h1>
      </Link>
    </div>
  )
}
