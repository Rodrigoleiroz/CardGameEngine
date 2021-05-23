const mongoDb = require('mongodb');
const mongoClient = mongoDb.MongoClient;

const url = 'mongodb://localhost:27017';

const getMongoClient = async () =>{
    const client = await mongoClient.connect(url)
    const db = client.db("CardGame");
    return db
}

const escreveCard = async (card) => {
    const db = await getMongoClient()
    const collection = db.collection('Cards');
    // --------
    collection.insertOne(card);
};

const pegaCards = async () => {
    const db = await getMongoClient()
    const collection = db.collection('Cards');
    // --------
    const cursor = collection.find({})
    const response = [];
    await cursor.forEach(doc => response.push(doc));
    await cursor.forEach(response.push);
    return response
} ;

let card = {
    name: "Madara",
    clan: "Uchiha",
    chackra: "all"
};

const main = async () => {
    await escreveCard(card)
};
main()
