import Amadeus from 'amadeus'
import dotenv from 'dotenv'
dotenv.config()

export default function amadeusService() {
    const apiKey = process.env.AMADEUS_API_KEY
    const apiSecret = process.env.AMADEUS_API_SECRET

    var amadeus = new Amadeus({
        clientId: apiKey,
        clientSecret: apiSecret
    })

    // amadeus.shopping.flightOffersSearch.get({
    //     originLocationCode: 'LON',
    //     destinationLocationCode: 'NYC',
    //     departureDate: '2024-01-22',
    //     adults: '1'
    // }).then((res)=>console.log(res))
    // .catch((err)=>console.log(err))

    const getFlightOffers = async (searchQuery) => await amadeus.shopping.flightOffersSearch.get(searchQuery)

    return {
        getFlightOffers
    }

}

