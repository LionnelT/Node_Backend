const express = require('express');
const app = express();

console.log("hello stizo");


app.get('/', (req,res) => {
    res.send('hello API')
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});