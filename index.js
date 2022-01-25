const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('hello world')
});

app.get('/api/bla', (req, res) => {
   res.sent([1, 2, 3]);
});

app.listen(3000, () => console.log('Lisening on port 3000....'))


