const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");
const cors = require("cors");
const config = require("./src/config");
const router = require('./src/router');
const {tokenVerify} = require("./src/hooks/authentication");
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', router);
app.use('/api', tokenVerify, router);
app.use(express.static(__dirname));
app.get("/signin", tokenVerify, (req, res) => {
    res.sendFile(__dirname + "/public/pages/signin.html");
});

app.listen(config.port, (err, res)=>{
    if(err){
        console.log(`Getting error while listining the port`);
    } else {
        console.log(`Server running on port number : ${config.port}`);
    }
});
