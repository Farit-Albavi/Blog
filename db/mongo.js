const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // URL de conexión a MongoDB
const dbName = 'blogDB'; // Nombre de tu base de datos

let db;

async function connectToDB() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Conectado a MongoDB');
    db = client.db(dbName);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}

function getDB() {
  return db;
}

module.exports = { connectToDB, getDB };
