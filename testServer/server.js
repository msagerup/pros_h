const express = require('express');
const app = express();
const cors = require('cors');
const { checkCode } = require('./helpers/helpers');


///////
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


///////
// GET Routes
app.get('/api/hotel', (req, res) => {
   res.send('ok');
})

app.get('/api/order/:code', async (req, res) => {
   let code = req.params.code
   // Check is provided code is valid/correct
   const resFromCheckCode = await checkCode(code);
   res.json(resFromCheckCode);
})


const port = 5000;
app.listen(port, () => {
   console.log(`SERVER is running on port ${port}`)
})