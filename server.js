const express = require("express");
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

const listener = app.listen(3000, () => {
    console.log("App is listening on port " + listener.address().port);
})