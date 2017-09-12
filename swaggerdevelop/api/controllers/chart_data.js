'use strict';

const getChartData = (req, res) => {
  const len = req.swagger.params.len.value || 5;
  const chartData = [];
  for (let i = 0; i < len; i++) {
    chartData.push(Math.round(Math.random() * 100));
  }
  res.json({ chartData });
}

module.exports = {
  get: getChartData
 };
