const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = moongoose.connect('mongodb://localhost/todo')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://administrador:vermelho99@cluster0.gx7xptv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});