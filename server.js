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
    let user = {name: body.name, u_id: body.id, score: 0, code: null, injuries: 0};
    await db.collection("users").insertOne(user);
    let location = {x: 0.0, y: 0.0, division: 0.0, u_id: user.u_id, hash: null, type: 1};
    await db.collection("location").insertOne(location);
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return true;
}

async function findLocation(u_id) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  let loc = {};
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("location");
    loc = await collection.findOne({u_id: u_id});
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return loc;
}

async function updateLocation(data) {
  let loc = data.delta;
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("location");
    const query = {$inc: data.delta};
    if (data.hash)
      query.$set = {hash: data.hash};
    // console.log(query);
    const result = await collection.findOneAndUpdate(
      {u_id: data.u_id}, query,
      {returnDocument: "after"});
    loc = result.value;
    console.log(loc.x, loc.y, loc.division);
    const query2 = {};
    let flag = false;
    if (loc.x > 100) {
      loc.x = 100;
      flag = true;
    }
    if (loc.y > 100) {
      loc.y = 100;
      flag = true;
    }
    if (loc.x < 0) {
      loc.x = 0;
      flag = true;
    }
    if (loc.y < 0) {
      loc.y = 0;
      flag = true;
    }
    if (Math.abs(loc.division) > 100) {
      loc.division %= 100;
      flag = true;
    }
    if (loc.division < 0) {
      loc.division += 100;
      flag = true;
    }
    console.log(loc.x, loc.y, loc.division);
    if (flag) {
      const result2 = await collection.findOneAndUpdate(
        {u_id: data.u_id}, {$set: {x: loc.x, y: loc.y, division: loc.division}},
        {returnDocument: "after"});
      loc = result2.value;
    }
    console.log(loc.x, loc.y, loc.division);
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
  let delta = {
    x: Math.random() * 25 + 12.5,
    y: Math.random() * 25 + 12.5,
    division: Math.random() * 100,
  }
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("rooms");
    const result = await collection.findOneAndUpdate(
      {capacity: {$lt: 4}}, {$inc: {capacity: 1}, $push: {players: u_id}}, {returnDocument: "after"});
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
      const result = await users.find({u_id: room.players[i]}).toArray();
      if (result) {
        if (result[0].x < 50) {
          if (result[0].y < 50)
            quarters[0] = true;
          else
            quarters[2] = true;
        } else {
          if (result[0].y < 50)
            quarters[1] = true;
          else
            quarters[3] = true;
        }
      }
    }
    if (!quarters[1]) delta.x += 50;
    else if (!quarters[2]) delta.y += 50;
    else if (!quarters[3]) {
      delta.x += 50;
      delta.y += 50;
    }
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return {hash: hash, delta: delta, u_id: u_id};
}

async function getLocation(hash) {
  let loc = {ships: [], bullets: []};
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("location");
    loc.ships = await collection.find({hash: hash, type: 1}).toArray();
    loc.bullets = await collection.find({hash: hash, type: 0}).toArray();
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return loc;
}

async function resetScore(u_id) {
  const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
  try {
    await mongoClient.connect();
    const db = mongoClient.db("codeitdb");
    const collection = db.collection("users");
    const result = await collection.findOneAndUpdate(
      {u_id: u_id},
      {$set: {score: 0, injuries: 0}});
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    await mongoClient.close();
  }
  return true;
}

io.on("connection", socket => {
  const {id} = socket.client;
  socket.emit("your id", socket.id);
  socket.on("reset score", u_id => {
      resetScore(u_id).then(io.emit("score" + u_id, ({score: 0, injuries: 0})));
    }
  );
  socket.on("add user", body => {
    addUser(body);
    findRoom(body.id, id).then(obj => {
      io.emit("hash of session", obj.hash);
      updateLocation(obj);
    });
  });
  socket.on("get location", hash => {
    // console.log(hash);
    getLocation(hash).then(loc => {
      // console.log(loc);
      io.emit("location" + hash, loc);
    });
  });
  socket.on("turn", data => {
    updateLocation({delta: {division: data.division}, u_id: data.u_id});
  });
  socket.on("move", data => {
    findLocation(data.u_id).then(loc =>
      updateLocation({
        delta: {
          x: Math.cos(loc.division / 50 * Math.PI) * data.distance,
          y: Math.sin(loc.division / 50 * Math.PI) * data.distance
        }, u_id: data.u_id
      }));
  });
  socket.on("send message", body => {
    io.emit("message" + body.hash, body)
  });
});

const port = 8000;
server.listen(port, () => console.log("server is running on port " + port));