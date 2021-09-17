const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
var { graphql, buildSchema } = require('graphql');

io.on("connection", socket => {
    const { id } = socket.client;
    console.log(`User connected: ${id}`);
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        console.log(`${id}: ${body.name} - ${body.id} - ${body.body}`);
        io.emit("message", body)
    })
})


server.listen(8000, () => console.log("server is running on port 8000"));