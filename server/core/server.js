require('dotenv').config();
const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

const options = {
    origin: 'http://localhost:3000'
}

app.use(cors(options));
app.use('./public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Successfully connected.');
    })
    .catch((error) =>{
        console.log(`Connection failed. Error: ${error}`);
        process.exit();
    }
);

require('./routes/items.routes')(app)

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`);
});