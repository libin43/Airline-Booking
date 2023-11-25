/* eslint-disable react/prop-types */

import { useState } from 'react'
import { BiCalendar, BiUser, BiWorld } from 'react-icons/bi';
import { IoAirplane } from "react-icons/io5";
import { Button } from '../Button/Button';

export const TicketSearch = ({onClick}) => {

        const [originLocationCode, setOriginLocationCode] = useState('');
        const [destinationLocationCode, setDestinationLocationCode] = useState('');
        const [departureDate, setDepartureDate] = useState('');
        const [returnDate, setReturnDate] = useState('');
        const [adults, setAdults] = useState(1);
        const [max] = useState(5)
        const [currencyCode] = useState('INR')
        const [flightClass, setFlightClass] = useState('economy');
      
        const handleSearch = async () => {
          const body = {
            originLocationCode,
            destinationLocationCode,
            departureDate,
            adults,
            currencyCode,
            max,
          }
          onClick(body)
        }

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-800 rounded-md shadow-md">
    <h1 className="text-3xl font-semibold mb-6 text-white">Flight Search</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex items-center">
        <BiWorld className="text-gray-500 mr-2" />
        <label htmlFor="from" className="block text-sm font-medium text-white">
          From
        </label>
        <input
          type="text"
          id="from"
          className="mt-1 p-2 w-full border rounded-md"
          value={originLocationCode}
          onChange={(e) => setOriginLocationCode(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <BiWorld className="text-gray-500 mr-2" />
        <label htmlFor="to" className="block text-sm font-medium text-white">
          To
        </label>
        <input
          type="text"
          id="to"
          className="mt-1 p-2 w-full border rounded-md"
          value={destinationLocationCode}
          onChange={(e) => setDestinationLocationCode(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <BiCalendar className="text-gray-500 mr-2" />
        <label htmlFor="departureDate" className="block text-sm font-medium text-white">
          Departure Date
        </label>
        <input
          type="date"
          id="departureDate"
          className="mt-1 p-2 w-full border rounded-md"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <BiCalendar className="text-gray-500 mr-2" />
        <label htmlFor="returnDate" className="block text-sm font-medium text-white">
          Return Date
        </label>
        <input
          type="date"
          id="returnDate"
          className="mt-1 p-2 w-full border rounded-md"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <BiUser className="text-gray-500 mr-2" />
        <label htmlFor="travelers" className="block text-sm font-medium text-white">
          Travelers
        </label>
        <input
          type="number"
          id="travelers"
          className="mt-1 p-2 w-full border rounded-md"
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="flex items-center">
        <IoAirplane className="text-gray-500 mr-2" />
        <label htmlFor="flightClass" className="block text-sm font-medium text-white">
          Class
        </label>
        <select
          id="flightClass"
          className="mt-1 p-2 w-full border rounded-md"
          value={flightClass}
          onChange={(e) => setFlightClass(e.target.value)}
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>
    </div>
    <div className="text-center">
    <Button style="mt-6 bg-blue-500 hover:bg-blue-700 text-white w-[60%] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    name="Search"
    onClick={handleSearch}
    type="submit"/>
    </div>
  </div>
  )
}
