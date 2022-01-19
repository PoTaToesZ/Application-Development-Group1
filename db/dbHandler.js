const mongoose = require('mongoose');
mongoose.connect('',
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true },
);

async function insertObject(collectionName,objectToInsert){
    const dbo = await getDB();
    const newObject = await dbo.collection(collectionName).insertOne(objectToInsert);
    console.log("Gia tri id moi duoc insert la: ", newObject.insertedId.toHexString());
}

module.exports = {insertObject}