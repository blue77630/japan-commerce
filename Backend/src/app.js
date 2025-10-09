const express = require('express');
const app = express();

app.get('/', (req , res) => {
    res.send('salut');
});

app.listen(3000, () => {
    console.log('The Backend is running on http://localhost/3000');
});