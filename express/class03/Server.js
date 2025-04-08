let exp = require("express");
let r = require("./Routes/route");
let db = require("./MongodbConnection");
let user = require("./Collections/user");
let record = require("./Collections/personal_record");
let health = require("./Collections/health_info");
require("dotenv").config();

let add_user = async () => {
  let user_data = new user({
    name: "John Doe",
    email: "jhondoe@gmail.com",
    password: "123456",
    age: "32",
    address: "new york",
  });
  await user_data.save();
};

let add_record = async () => {
  let record_data = new record({
    height: 180, // in cm
    bmi: 24.7,
    category: "Normal weight",
    weight: 75, // in kg
  });
  await record_data.save();
};

let add_health = async () => {
  let health_data = new health({
    bp: 100, // Blood Pressure
    heart_rate: 72, // in bpm
    sugar: 90, // mg/dL
    colestroll: 180, // mg/dL
  });
  await health_data.save();
};
let app = exp();
app.use("/", r);

db()
  .then(() => {
    // add_user();
    // add_record();
    // add_health();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
