import userInsert from "../application/usecases/userInsert.js";
import userLoginAuth from "../application/usecases/userLoginAuth.js";
import userRefreshAuth from "../application/usecases/userRefreshAuth.js";



export default function userController(
    userRepository,
    userRepoMongoDB,
    hashServiceInterface,
    hashService,
    webTokenServiceInterface,
    webTokenService
){
    const dbUserRepo = userRepository(userRepoMongoDB())
    const serviceHash = hashServiceInterface(hashService())
    const serviceToken = webTokenServiceInterface(webTokenService())

    const addUser = async(req, res, next)=>{
        try{
            const {
                firstName,
                lastName,
                email,
                password,
            } = req.body
            userInsert(
                firstName,
                lastName,
                email,
                password,
                dbUserRepo,
                serviceHash,
            )
            .then((user) => res.status(200).json({ success: true, message: 'User added successfully', user }))
            .catch((error) => next(error))
        } catch(error) {
            // next(error)
        }
    }
    
    const authenticateUser = async (req, res, next) => {
        try{
            console.log('called in login');
            const {
                email,
                password,
            } = req.body
            userLoginAuth(
                email,
                password,
                dbUserRepo,
                serviceHash,
                serviceToken,
            )            
            .then(({
                accessToken,
                refreshToken,
                payload
            }) => {
                res.cookie('refreshToken', refreshToken,{
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None',
                    
                })
                const user = {
                    ...payload,
                    accessToken: accessToken,
                }
                res.status(200).json({ success: true, message: 'Login success', user })
            }
            )
            .catch((error) => next(error))
        } catch(error) {
            //next(error)
        }
    }

    const reAuthAndFetchUser = async (req, res, next) => {
        try{
            console.log('called in reAuth');
            const token = req.cookies?.refreshToken
            console.log(token,'refresh token');
            userRefreshAuth(
                token,
                dbUserRepo,
                serviceToken,
                )
                .then(({
                    accessToken,
                    payload
                }) => {
                    const user = {
                        ...payload,
                        accessToken: accessToken,
                    }
                    res.status(200).json({ success: true, message: 'User refetch success', user })
                }
                )
                .catch((error) => {
                    if(error.name === 'TokenExpiredError'){
                        return next(new Error('Refresh token has expired'))
                    } else {
                        return next(new Error('Invalid token'))
                    }
                })
        } catch(error) {
            // next(error)
        }

    }



    return{
        addUser,
        authenticateUser,
        reAuthAndFetchUser,
    }
}