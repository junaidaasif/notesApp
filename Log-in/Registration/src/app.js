const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 80;


app.get('/', (req, res)=>{
    res.send("hello from technical")
});

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})

