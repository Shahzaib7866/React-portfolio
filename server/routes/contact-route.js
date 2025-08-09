const express = require("express");

const app = express.Router();

app.route("/contact").post(contactForm);

module.exports= app;








