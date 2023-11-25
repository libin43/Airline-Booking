export default function amadeusServiceInterface(amadeusService) {
    const getFlightOffers = async (searchQuery) => amadeusService.getFlightOffers(searchQuery)
    
    return {
        getFlightOffers,
    }
}