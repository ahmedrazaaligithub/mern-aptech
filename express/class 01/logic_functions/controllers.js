let Index = async function (req, res) {
  res.send("index page");
  res.end();
};

let About = async function (req, res) {
  res.send("About page");
  res.end();
};

let Contact = async function (req, res) {
  res.send("Contact page");
  res.end();
};

module.exports = { Index, About, Contact };