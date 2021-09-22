const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const ObjectID = mongo.ObjectID;

const url = 'mongodb://localhost:27017';

function addUser(body) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoClient.connect(function (err, client) {
    if (err) throw err;
    const db = client.db("codeitdb");
    let user = {name: body.name, u_id: body.id, score: 0, code: null};
    db.collection("users").insertOne(user, function (err, result) {
      if (err) {
        return console.log(err);
      }
      console.log(result);
      console.log(user);
    });
    let location = {x: 0.0, y: 0.0, division: 0.0, u_id: user.u_id};
    db.collection("location").insertOne(location, function (err, result) {
      if (err) {
        return console.log(err);
      }
      console.log(result);
      console.log(location);
      client.close();
    });
  });
}

async function updateLocation() {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("location");
    //...
    console.log(results);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoClient.close();
  }
}

async function findRoom() {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("rooms");
    let query = {capacity: {$lt: 4}};
    const results = await collection.find(query).toArray();
    console.log("findRoom" + results);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoClient.close();
  }
}

io.on("connection", socket => {
  const {id} = socket.client;
  console.log(`User connected: ${id}`);
  socket.emit("your id", socket.id);
  socket.on("add user", body => {
    console.log(`${id}: ${body.name} - ${body.id}`);
    addUser(body);
    findRoom();
    io.emit("hash of session", "123")
  })
  socket.on("send message", body => {
    console.log(`${id}: ${body.name} - ${body.id} - ${body.body} #${body.hash}`);
    io.emit("message" + body.hash, body)

  })
})

const port = 8000;
server.listen(port, () => console.log("server is running on port " + port));