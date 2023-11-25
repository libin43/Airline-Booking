export default async function userFetchTicket(
    payload,
    serviceAmadeus,

) {
    const data = await serviceAmadeus.getFlightOffers(payload)

    console.log(data.result);

    return data
    
}