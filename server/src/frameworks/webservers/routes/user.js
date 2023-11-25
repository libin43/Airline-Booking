import userController from "../../../controllers/userController.js";
import userRepository from "../../../application/repositories/userRepository.js";
import userRepoMongoDB from "../../databases/mongoDB/repositories/userRepoMongoDB.js";
import hashServiceInterface from "../../../application/services/hashServiceInterface.js";
import hashService from "../../services/hashService.js";
import webTokenServiceInterface from "../../../application/services/webTokenServiceInterface.js";
import webTokenService from "../../services/webTokenService.js";
import amadeusServiceInterface from "../../../application/services/amadeusServiceInterface.js";
import amadeusService from "../../services/amadeusService.js";
import authUser from "../middlewares/authUserMiddleware.js";

export default function userRoute(express){
    const router = express.Router();

    const controller = userController(
        userRepository,
        userRepoMongoDB,
        hashServiceInterface,
        hashService,
        webTokenServiceInterface,
        webTokenService,
        amadeusServiceInterface,
        amadeusService
    )
    //post methods
    router.route('/signup').post(controller.addUser)

    router.route('/login').post(controller.authenticateUser)

    router.route('/auth/book').post(authUser)

    router.route('/auth/offer_tickets').post(authUser, controller.fetchOfferTicketUser)

    //get methods
    router.route('/auth/refresh').get(controller.reAuthAndFetchUser)
    return router;
}