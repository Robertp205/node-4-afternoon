const swag = require("../models/swag");

module.exports = {
  swaggy: (req, res, next) => {
    res.status(200).send(swag);
  }
};