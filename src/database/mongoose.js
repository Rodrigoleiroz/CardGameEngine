const url = 'mongodb://localhost:27017';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

const cardSchema = new mongoose.Schema({
    id: Number,
    name: String,
    clan: String,
    chackra: String,
    hp: Number,
    nivel: String,
});
const Card = mongoose.model('Card', cardSchema);

const ninja = new Card({
    id: 1,
    name: 'Naruto',
    clan: 'uzumaki',
    chackra: 'all',
    hp: 350,
    nivel: 'kage',
});
console.log(ninja.name);
//------------------ 


const main = async() => {
    const cardSalvo = await ninja.save();
    // const todosCards = await Card.find();
    // const todosCards2 = await Card.find({ clan: 'uzumaki' });
    // const todosCards3 = await Card.deleteOne({ name: 'Naruto' });

}

main()

// const getMongoClient = async () =>{
//     const client = await mongoClient.connect(url)
//     const db = client.db("CardGame");
//     return db
// }

// const escreveCard = async (card) => {
//     const db = await getMongoClient()
//     const collection = db.collection('Cards');
//     // --------
//     collection.insertOne(card);
// };

// const pegaCards = async () => {
//     const db = await getMongoClient()
//     const collection = db.collection('Cards');
//     // --------
//     const cursor = collection.find({})
//     const response = [];
//     await cursor.forEach(doc => response.push(doc));
//     await cursor.forEach(response.push);
//     return response
// } ;

// let card = {
//     name: "Madara",
//     clan: "Uchiha",
//     chackra: "all"
// };

// const main = async () => {
//     await escreveCard(card)
// };
// main()