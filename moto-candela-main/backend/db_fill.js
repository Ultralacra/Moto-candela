// MONGO SETUP
const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs');

const credentials = 'certificate.pem'
const mongoURL = 'mongodb+srv://cluster0.nrzqsud.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';

const client = new MongoClient(mongoURL, {
  tls: true,
  tlsCertificateKeyFile: credentials,
  tlsAllowInvalidCertificates: true
});

async function run() {
  try {
    await client.connect();
    const db = client.db("moto-candela");
    const Motorcycle = db.collection('Motorcycle');
    const Replacement = db.collection('Replacement');
    const Category = db.collection('Category');

    let data = fs.readFileSync('moto-candela.motorcycles.json', 'utf8');
    const motorcycles = JSON.parse(data);
    motorcycles.forEach(motorcycle => {
      if (motorcycle._id && motorcycle._id.$oid) {
        motorcycle._id = new ObjectId(motorcycle._id.$oid);
      }
    });
    await Motorcycle.insertMany(motorcycles);

    data = fs.readFileSync('moto-candela.replacements.json', 'utf8');
    const replacements = JSON.parse(data);
    replacements.forEach(replacement => {
      if (replacement._id && replacement._id.$oid) {
        replacement._id = new ObjectId(replacement._id.$oid);
      }
    });
    await Replacement.insertMany(replacements);

    data = fs.readFileSync('moto-candela.categories.json', 'utf8');
    const categories = JSON.parse(data);
    categories.forEach(category => {
      if (category._id && category._id.$oid) {
        category._id = new ObjectId(category._id.$oid);
      }
    });
    await Category.insertMany(categories);

    await db.collection('counters').insertMany([
      { _id: "motorcycles", sequence_value: motorcycles.length },
      { _id: "replacements", sequence_value: replacements.length },
      { _id: "categories", sequence_value: categories.length }
    ]);

    console.log('Done!');

  } catch (err) {
    console.log(err.stack);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);