const express = require('express');
const {codes} = require('./dataSet/hotelData')
const app = express();

console.log(codes)

app.get('/api/hotel', function(req,res) {
   res.send(codes)
})

const port = 5000;
app.listen(port, () => {
   console.log(`SERVER is running on port ${port}`)
})