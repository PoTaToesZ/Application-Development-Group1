const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minhthanh:<Mot23456>@cluster0.mdf92.mongodb.net/test',
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