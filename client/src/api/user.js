import { API } from "./index";

const userRegisterAPI = (body) => API.post('/user/signup', body)

const userLoginAPI = (body) => API.post('/user/login', body)

const userFetchOnRefreshAPI = () => API.get('/user/auth/refresh')

const userFetchAllOffers = (body) => API.post('/user/auth/offer_tickets', body)

const userLogoutAPI = () => API.post('/user/logout')


export {
    userRegisterAPI,
    userLoginAPI,
    userFetchOnRefreshAPI,
    userFetchAllOffers,
    userLogoutAPI,
}