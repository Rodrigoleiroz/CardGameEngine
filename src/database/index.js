const mongoDb = require('mongodb');
const mongoClient = mongoDb.MongoClient;

const url = 'mongodb://localhost:27017';

const client = await mongoClient.connect(url)
const db = client.db("CardGame");
const collection = db.collection('Cards');

const escreveCard = async (card) => {
    collection.insertOne(card);
};

const pegaCards = async () => {
    const cursor = collection.find({})
    const response = [];
    await cursor.forEach(doc => response.push(doc));
    // await cursor.forEach(response.push);
    return response
} ;
