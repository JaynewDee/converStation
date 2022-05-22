const express = require('express');
const path = require('path');
const routes = require('./API/index.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 80;
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.use(routes);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT} 🚀`)
);


