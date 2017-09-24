const mongoose = require('mongoose');
const SimpleModel = require('../api/models/simple.model');

module.exports = () => {
    console.log('monogo seed data');

    const limit = 100;
    const insertPromises = [];
    for (let i = 0; i < limit; i++) {
        const obj = new SimpleModel();
        obj.id = i;
        obj.name = `name-${i}`;
        obj.description = `description-${i}`;
        obj.firstSeen = new Date();
        obj.lastSeen = new Date();
        insertPromises[i] = obj.save();
    }

    Promise.all(insertPromises).then((results) => {
        console.log('number saved:', results.length);
        console.log(results[0]);
    });
};