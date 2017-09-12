'use strict';
const util = require('util');

const currentDate = (req, res) => {
  const name = req.swagger.params.name.value || '';
  const date = new Date();
  const message = util.format('%s, the current dtg is %s', name, date);
  console.log(res);
  res.json({ message, date });
}

module.exports = {
  get: currentDate
 };
