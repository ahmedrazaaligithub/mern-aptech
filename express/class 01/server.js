const express = require("express");
const app = express();
const router = require("./routes/router");
const PROT =process.env.PORT || 3000
app.use("/", router);
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
