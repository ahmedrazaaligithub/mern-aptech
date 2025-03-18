let bcrypt = require("bcrypt");

let myPassword = "123456";
let salt = 10;
let hashedPassword = bcrypt.hashSync(myPassword, salt);
console.log(hashedPassword);

let check = bcrypt.compareSync(myPassword, hashedPassword);
if (check) {
  console.log("Password is correct");
} else {
  console.log("Password is incorrect");
}
