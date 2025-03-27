let func = require("../logic_functions/controllers");
let express = require("express");
let route = express.Router();

route.get("/", func.Index);
route.get("/about", func.About);
route.get("/contact", func.Contact);
module.exports = route;