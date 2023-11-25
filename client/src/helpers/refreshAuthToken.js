import store from '../redux/store/configStore';
import { setAccessToken } from '../redux/reducers/userSlice';
import { userFetchOnRefreshAPI } from '../api/user';


    export const refreshAuthToken = async () => {
        const response = await userFetchOnRefreshAPI()
        const newAccessToken = response.data?.user?.accessToken
        // Update the store with the new access token
        store.dispatch(setAccessToken(newAccessToken))
        return newAccessToken
    }