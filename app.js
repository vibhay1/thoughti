const express = require('express');
const app = express();
const port = 3080;
app.use(express.json({extended:true}));

const records = require('./records/route');

app.use('/api/managed-records',records)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})