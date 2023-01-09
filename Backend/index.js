const express = require("express")
const {Server} = require("socket.io")
const http = require("http")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
app.use(cors())
dotenv.config();
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"https://wechatdj.netlify.app",
        methods:["GET","POST"]
    }
})
app.get("/",(req,res)=>{
    res.send("Socket chat BE started")
})
io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.on("joinRoom" , room => socket.join(room))
    socket.on("newMessage",({newMessage,room})=>{
        console.log(room,newMessage)
        io.in(room).emit("getLatestMessage",newMessage)
    })
});


server.listen(8000,()=> console.log("app started at port 8000"))