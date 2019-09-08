var express = require('express');
var router = express.Router();

const fs = require('fs');
const csv = require('csv-parser');

/* GET home page. */
router.get('/fetch', function(req, res, next) {
  const dataArray = [];
  return fs.createReadStream(process.env.CSV_FILE_NAME)
    .pipe(csv())
    .on('data', (row) => {
      dataArray.push(row);
    })
    .on('end', () => {
      res.json(dataArray);
    })
    .on('error', next);
});

module.exports = router;
