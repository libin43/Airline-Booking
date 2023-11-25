import express from 'express';
import mongoose from 'mongoose';
import expressConfig from './frameworks/webservers/express.js';
import mongoConnection from './frameworks/databases/mongoDB/connection.js';
import config from './config/config.js';
import routes from './frameworks/webservers/routes/index.js'
import errorHandle from './frameworks/webservers/middlewares/errorHandleMiddleware.js';

import amadeusService from './frameworks/services/amadeusService.js';

const app = express();
expressConfig(app, express, config)
mongoConnection(mongoose, config,{
    connectTimeoutMS: 5000,
}).connectToMongo()

routes(app, express)

amadeusService()

app.use(errorHandle)
