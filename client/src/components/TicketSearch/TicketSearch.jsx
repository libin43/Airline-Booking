/* eslint-disable react/prop-types */

import { useState } from 'react'
import { BiCalendar, BiUser, BiWorld } from 'react-icons/bi';
import { IoAirplane } from "react-icons/io5";
import { Button } from '../Button/Button';
import { InputField } from '../Input/InputField';
import { showToast } from '../../utils/toast';

export const TicketSearch = ({ onClick }) => {

    const [originLocationCode, setOriginLocationCode] = useState('COK');
    const [destinationLocationCode, setDestinationLocationCode] = useState('BOM');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [max] = useState(5)
    const [currencyCode] = useState('INR')
    const [travelClass, setTravelClass] = ('ECONOMY')
    const handleSearch = async () => {
        const body = {
            originLocationCode,
            destinationLocationCode,
            departureDate,
            adults,
            currencyCode,
            max,
        }
        if (originLocationCode && destinationLocationCode && departureDate && returnDate && adults) {
            onClick(body)
        } else {
            showToast('Search fields cannot be empty', 'error')
        }
    }

    return (
        <div className="container mx-auto mt-10 p-6 bg-gray-800 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-white">Flight Search</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center">
            <BiWorld className="text-gray-500 mr-2" />
            <label htmlFor="from" className="block xl:text-lg text-sm mr-2 font-medium text-white">
              From
            </label>
            <InputField
              type="text"
              name="from"
              value={originLocationCode}
              style="mt-1 p-2 w-20 xl:w-full border rounded-md"
              onChange={(value) => setOriginLocationCode((prev) => (value !== prev ? value : prev))}
            />
          </div>
          <div className="flex items-center">
            <BiWorld className="text-gray-500 mr-2" />
            <label htmlFor="to" className="block xl:text-lg text-sm mr-2 font-medium text-white">
              To
            </label>
            <InputField
              type="text"
              name="from"
              value={destinationLocationCode}
              style="mt-1 p-2 w-20 xl:w-full border rounded-md"
              onChange={(value) => setDestinationLocationCode((prev) => (value !== prev ? value : prev))}
            />
          </div>
          <div className="flex items-center">
            <BiCalendar className="text-gray-500 mr-2" />
            <label htmlFor="departureDate" className="block xl:text-lg text-sm mr-2 font-medium text-white">
              Departure
            </label>
            <InputField
              type="date"
              name="from"
              value={departureDate}
              style="mt-1 p-2 w-24 border rounded-md"
              onChange={(value) => setDepartureDate((prev) => (value !== prev ? value : prev))}
            />
          </div>
          <div className="flex items-center">
            <BiCalendar className="text-gray-500 mr-2" />
            <label htmlFor="returnDate" className="block xl:text-lg text-sm mr-2 font-medium text-white">
              Return
            </label>
            <InputField
              type="date"
              name="from"
              value={returnDate}
              style="mt-1 p-2 w-24 border rounded-md"
              onChange={(value) => setReturnDate((prev) => (value !== prev ? value : prev))}
            />
          </div>
          <div className="flex items-center">
            <BiUser className="text-gray-500 mr-2" />
            <label htmlFor="travelers" className="block xl:text-lg text-sm mr-2 font-medium text-white">
              Travelers
            </label>
            <InputField
              type="number"
              name="from"
              value={adults}
              style="mt-1 p-2 w-full border rounded-md"
              onChange={(value) => setAdults((prev) => (value !== prev ? value : prev))}
            />
          </div>
          <div className="flex items-center">
            <IoAirplane className="text-gray-500 mr-2" />
            <label htmlFor="flightClass" className="block xl:text-lg text-sm mr-2 font-medium text-white">
              Class
            </label>
            <select
              id="flightClass"
              className="mt-1 p-2 w-full border rounded-md"
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
            >
              <option value="ECONOMY">Economy</option>
              <option value="PREMIUM_ECONOMY">Premium Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>
        </div>
        <div className="text-center">
          <Button
            style="mt-6 bg-blue-500 hover:bg-blue-700 text-white w-[70%] font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            name="Search"
            onClick={handleSearch}
            type="submit"
          />
        </div>
      </div>
    )
}
