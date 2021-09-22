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

async function addUser(body) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    let user = {name: body.name, u_id: body.id, score: 0, code: null};
    await db.collection("users").insertOne(user);
    let location = {x: 0.0, y: 0.0, division: 0.0, u_id: user.u_id};
    await db.collection("location").insertOne(location);
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return true;
}

async function updateLocation(delta) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("location");
    //...
    console.log(results);
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return true;
}

async function findRoom(u_id, hash) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("rooms");
    const results = await collection.findOneAndUpdate(
      {capacity: {$lt: 5}}, {$inc: {capacity: 1}, $push: {players: u_id}}, {new: true});
    if (!results.value) {
      let room = {hash: hash, capacity: 1, players: [u_id]};
      const result = await db.collection("rooms").insertOne(room);
    } else {
      hash = results.value.hash;
    }
    // TODO: updateLocation
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return hash;
}

io.on("connection", socket => {
  const {id} = socket.client;
  // console.log(`User connected: ${id}`);
  socket.emit("your id", socket.id);
  socket.on("add user", body => {
    // console.log(`${id}: ${body.name} - ${body.id}`);
    addUser(body);
    findRoom(body.id, id).then(hash => io.emit("hash of session", hash));
  })
  socket.on("send message", body => {
    // console.log(`${id}: ${body.name} - ${body.id} - ${body.body} #${body.hash}`);
    io.emit("message" + body.hash, body)

  })
})

const port = 8000;
server.listen(port, () => console.log("server is running on port " + port));