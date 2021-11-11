require('dotenv').config();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@lolcalculator.bmzfd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(db.url, {useNewUrlParser: true});
db.champions = require('./champions.model.js')(mongoose);

module.exports = db;

const conn = mongoose.connection;

try {
    conn.on('open', () => {
        console.log('connected');
    })
} catch (error) {
    console.log(`Error: ${error}`);
}
