let mongodb = require("mongoose");
require("dotenv").config();

mongodb
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });