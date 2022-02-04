const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
const regionData = require('./regionData.js');
const mainPage = require('./mainPage');
const regionPage = require('./regionPage');

app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/', (req, res) => {

    res.send(mainPage(regionData.dataList()));
})

app.get('/region/:region', (req, res) => {
    const regionName = req.params.region;
    const region = regionData.findRegionByName(regionName);
    
    res.send(regionPage(region));


})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });