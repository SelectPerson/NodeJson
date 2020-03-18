const express = require('express');
const app = express();

const PORT = 68068;

app.get('/', (req,res) => {
   res.send('<h1>Home page</h1>');
});

app.listen(PORT, () => {
    console.log('Nice');
});


