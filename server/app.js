/**
 * Main entry point for the express server.
 */

'use strict';
require('dotenv').config();

import async from 'async';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import winston from 'winston';

import ServerAPI from './server-api';
import WebsiteVisitor from './models/WebsiteVisitor';

// Avoid mongoose Promise deprecation warning
mongoose.Promise = global.Promise;

// Web server port
const webAppPort = process.env.PORT || 8000;

// MongoDB connection string
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/wedding';

// Logging level
winston.level = process.env.LOG_LEVEL || 'debug';

// The Web server chain
const WebApp = express();
WebApp.set('trust proxy', true);

// Execute the initialization sequence
async.waterfall([

    function setupMongoDBConnection(callback) {
        mongoose.connect(mongodbUri, function (err, res) {
            if (err) {
                winston.log('error', 'Failed to connect to mongodb', mongodbUri, err);
                callback(err);
            } else {
                winston.log('debug', 'Successfully connected to mongodb', mongodbUri, res);
                callback(null);
            }
        });
    },

    function setupMongoDBUserTracking(callback) {
        WebApp.use(
            '/',
            cookieParser(),
            function (req, res, next) {
                if (req.path === '/') {
                    new WebsiteVisitor({
                        ip: req.ip,
                        userAgent: req.headers['user-agent'],
                        sessionId: req.cookies['_ga'],
                    }).save((err) => {
                        if (err) {
                            winston.log('info',
                                'Failed to write MongoDB user tracking data due to',
                                JSON.stringify(err));
                        }
                    });
                }

                next('route');
            });

        callback(null);
    },

    function startWebServer(callback) {
        WebApp.use('/api', ServerAPI);
        WebApp.use(express.static('static'));

        var server = WebApp.listen(webAppPort, () => {
            winston.log('info', 'Web server listening on port', webAppPort);
            callback(null);
        }).on('error', function onListenError(err) {
            winston.log('error', 'Web server failed to listen on port', webAppPort, err);
            callback(err);
        });
    },

], function final(err, result) {

});
