const http = require("http");
const mongoose = require('mongoose');

// 連接資料庫
mongoose.connect('mongodb://localhost:27017/POSsystem')
    .then(()=>{
        console.log('資料庫連線成功')
    })
    .catch((error)=>{
        console.log(error);
    });


const requestListener = (req,res)=>{
    console.log(req.url);
    res.end();
}

const server = http.createServer(requestListener);
server.listen(3005);