const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
    path: './config.env'
})
const DB = process.env.DataBase;

mongoose.connect(DB, {
    UseNewUrlParser: true
}).then(() => {
    console.log(`DB is Connected Successfully....`);
}).catch((error) => {
    console.log(`DB is not Connected: 💥`);
})

app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`App is running on PORT ${process.env.PORT}....`);
})