const mongoose = require('mongoose');
const mongoSeed = require('./mongoseed');

process.env.MONGO_REPOSITORY = process.env.MONGO_REPOSITORY || 'localhost';
process.env.MONGO_PORT = process.env.MONGO_PORT || 27018;
process.env.MONGO_DBNAME = process.env.MONGO_DBNAME || 'meantest';

module.exports = () => {
    if (global.conn === undefined) {
        mongoose.connect(`mongodb://${process.env.MONGO_REPOSITORY}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`, {
            server: {
                poolSize: 32,
                reconnectTries: 5,
                socketOptions: {
                    keepAlive: 300000,
                    connectTimeoutMS: 30000
                }
            }
        });

        const db = global.conn = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('connected', () => { 
            console.log('connected to mongodb');
            mongoSeed();
        });
        db.on('disconnected', () => console.log('disconnected from mongodb'));
        db.once('open', () => console.log('mongo db connection open'));
        process.on('SIGINT', function () {
            db.close(function () {
                console.log('Safely closed MongoDB Connection');
                process.exit(0);
            });
        });
    }     
};