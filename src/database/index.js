const mongoDb = require('mongodb');
const mongoClient = mongoDb.MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
const main = async () => {
    const client = await mongoClient.connect(url)
    const db = client.db("CardGame");
    const collection = db.collection('Cards');

    collection.insertOne(
        { Nome: "canvas"}
    );
};

main()
