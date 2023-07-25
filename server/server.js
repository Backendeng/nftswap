const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const Routes = require('./route');
require('./config/DB');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '/frontend')));

// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname + '/frontend', 'index.html'));
// });

app.use("/api/", Routes);
app.listen(port, () => console.log("server started at 8000"));