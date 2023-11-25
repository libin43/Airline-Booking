import React from 'react'
import { TicketSearch } from '../components/TicketSearch/TicketSearch'
import { Navbar } from '../components/Navbar/Navbar'

export const UserHome = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-72 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-current text-white"
        >
          <path
            fillOpacity="1"
            d="M0,96L48,96C96,96,192,96,288,106.7C384,117,480,139,576,144C672,149,768,139,864,128C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
    <div className="absolute top-24 right-0">
        <TicketSearch/>
    </div>
    </div>

    </>
  )
}
