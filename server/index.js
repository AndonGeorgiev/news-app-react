const express = require('express');
const expressConfig = require('./config/express');
const dbConfig = require('./config/mongoose');




const app = express();
expressConfig(app);
app.get('/', (res, req) => {
    req.json({ "test": "test" });
    req.end();
})
dbConfig()
.then(() =>{
    app.listen(4000, ()=>{
        console.log(`server running on http://localhost:4000`);
    })
})
.catch((err) =>{
    console.log(err);
})