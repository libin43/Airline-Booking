import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import store from '../redux/store/configStore'
import { toast } from 'react-hot-toast'; 
import { refreshAuthToken } from '../helpers/refreshAuthToken'

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})


API.interceptors.request.use((req) => {
    const accessToken = store.getState().user?.accessToken
    console.log(accessToken,'got in receptor');
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
    }
    return req;
}, (error) => {
    return Promise.reject(error)
})

API.interceptors.response.use(
    (res) => {
        return res
    },
    async (error) => {
        console.log(error, 'COMMON ERROR');
        toast.dismiss()

        if (error?.code === 'ERR_NETWORK' || error?.code === 'ERR_BAD_RESPONSE') {
            toast.error('Oops! it seems that the server is not connected')
        }

        const originalRequest = error.config

        if (error.response.data === 'Access token has expired' && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Attempt to refresh access token
                const newAccessToken = await refreshAuthToken();
                console.log(newAccessToken, 'newaceess token');
                // Retry the original request with the new access token
                return API(originalRequest);

            } catch (refreshError) {
                console.log('Error refreshing access token:', refreshError);
                window.location.href = "/signin"
            }
        }

        switch (error.response.data) {

            case 'Refresh token has expired':
                window.location.href = "/signin"
                break;

            case 'Unauthorized':
                window.location.href = "/signin"
                break;

            default:
                break;
        }

        return Promise.reject(error);
    }

)

export { API }