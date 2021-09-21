const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

function addUser(body) {

}

io.on("connection", socket => {
  const {id} = socket.client;
  console.log(`User connected: ${id}`);
  socket.emit("your id", socket.id);
  socket.on("add user", body => {
    console.log(`${id}: ${body.name} - ${body.id} - ${body.score}`);
    addUser(body);
    io.emit("hash of session", "123") //TODO: get hash
  })
  socket.on("send message", body => {
    console.log(`${id}: ${body.name} - ${body.id} - ${body.body} #${body.hash}`);
    io.emit("message"+body.hash, body) //message + hash

  })
})

const port = 8000;
server.listen(port, () => console.log("server is running on port " + port));