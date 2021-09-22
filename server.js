const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
// const ObjectID = mongo.ObjectID;

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
  let loc = delta;
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("location");
    const result = await collection.findOneAndUpdate(
      {u_id: delta.u_id}, {$inc: {x: delta.x, y: delta.y, division: delta.division}},
      {new: true});
    loc = result.value;//error!
    console.log("42");
    console.log(loc);
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return loc;
}


async function findRoom(u_id, hash) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  let delta = {x: 0.0, y: 0.0, division: Math.random() * 100, u_id: u_id}
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("rooms");
    const result = await collection.findOneAndUpdate(
      {capacity: {$lt: 4}}, {$inc: {capacity: 1}, $push: {players: u_id}}, {new: true});
    let room = result.value;
    if (!room) {
      room = {hash: hash, capacity: 1, players: [u_id]};
      await db.collection("rooms").insertOne(room);
    } else {
      hash = result.value.hash;
    }
    let quarters = [false, false, false, false];
    const users = db.collection("location");
    for (let i = 0; i < room.capacity - 1; i++) {
      const result = await users.find({u_id: room.players[i]}).toArray();//error!
      if (result) {
        if (result.x < 50) {
          if (result.y < 50)
            quarters[0] = true;
          else
            quarters[2] = true;
        } else {
          if (result.y < 50)
            quarters[1] = true;
          else
            quarters[3] = true;
        }
      }
    }
    delta.x += Math.random() * 25 + 12.5;
    delta.y += Math.random() * 25 + 12.5;
    if (!quarters[1]) delta.x += 50;
    else if (!quarters[2]) delta.y += 50;
    else if (!quarters[3]) {
      delta.x += 50;
      delta.y += 50;
    }
    console.log("96");
    console.log(delta);
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return {hash: hash, delta: delta};
}

io.on("connection", socket => {
  const {id} = socket.client;
  socket.emit("your id", socket.id);
  socket.on("add user", body => {
    addUser(body);
    findRoom(body.id, id).then(ans => {
      io.emit("hash of session", ans.hash);
      console.log("114");
      console.log(ans.delta);
      updateLocation(ans.delta).then(loc => {
        console.log("117");
        console.log(loc);
      });
    });
  })
  socket.on("send message", body => {
    io.emit("message" + body.hash, body)

  })
})

const port = 8000;
server.listen(port, () => console.log("server is running on port " + port));