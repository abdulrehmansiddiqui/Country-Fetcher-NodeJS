const express = require('express');
const app = express()

app.use(function (req, res, next) {
    req.payload = {};
    next();
});

app.use(require("./src/routes/index"));


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server Running " + PORT)
})