const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");

const credentials = "certificate.pem";
const mongoURL =
  "mongodb+srv://cluster0.nrzqsud.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

const client = new MongoClient(mongoURL, {
  tls: true,
  tlsCertificateKeyFile: credentials,
  tlsAllowInvalidCertificates: true,
});

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Moto Candela Service</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Moto Candela Service!
    </section>
  </body>
</html>
`;

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type("html").send(html));

app.use(cors());

app.use(async (req, res, next) => {
  try {
    await client.connect();
    req.db = client.db("moto-candela");
    req.Motorcycle = req.db.collection("Motorcycle");
    req.Replacement = req.db.collection("Replacement");
    req.Category = req.db.collection("Category");
    req.counters = req.db.collection("counters");
    next();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while connecting to the database" });
  }
});

// GET endpoints
app.get("/api/rest/v1/motorcycles/:id", async (req, res) => {
  const motorcycle = await req.Motorcycle.findOne({
    id: parseInt(req.params.id),
  });
  res.json(motorcycle);
});

app.get("/api/rest/v1/motorcycles", async (req, res) => {
  const motorcycles = await req.Motorcycle.find().toArray();
  res.json(motorcycles);
});

app.get("/api/rest/v1/replacements/:id", async (req, res) => {
  const replacement = await req.Replacement.findOne({
    id: parseInt(req.params.id),
  });
  res.json(replacement);
});

app.get("/api/rest/v1/replacements", async (req, res) => {
  const replacements = await req.Replacement.find().toArray();
  res.json(replacements);
});

app.get("/api/rest/v1/categories/:id", async (req, res) => {
  const category = await req.Category.findOne({
    id: parseInt(req.params.id),
  });
  res.json(category);
});

app.get("/api/rest/v1/categories", async (req, res) => {
  const categories = await req.Category.find().toArray();
  res.json(categories);
});

// This line is needed to parse JSON request body
app.use(express.json());

async function getNextSequenceValue(req, sequenceName){
  const sequenceDocument = await req.counters.findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { sequence_value: 1 } },
    { returnDocument: "after" }
  );
  return sequenceDocument.value.sequence_value;
}

// POST endpoints
app.post("/api/rest/v1/motorcycles", async (req, res) => {
  req.body.id = await getNextSequenceValue(req, "motorcycles");
  try {
    const result = await req.Motorcycle.insertOne(req.body);
    result.id = req.body.id;
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Insert operation failed', error: err.message });
  }
});

app.post("/api/rest/v1/replacements", async (req, res) => {
  req.body.id = await getNextSequenceValue(req, "replacements");
  try {
    const result = await req.Replacement.insertOne(req.body);
    result.id = req.body.id;
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Insert operation failed', error: err.message });
  }
});

app.post("/api/rest/v1/categories", async (req, res) => {
  req.body.id = await getNextSequenceValue(req, "categories");
  try {
    const result = await req.Category.insertOne(req.body);
    result.id = req.body.id;
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Insert operation failed', error: err.message });
  }
});

// DELETE endpoints
app.delete("/api/rest/v1/motorcycles/:id", async (req, res) => {
  try {
    const result = await req.Motorcycle.deleteOne({ id: parseInt(req.params.id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Delete operation failed', error: 'Motorcycle not found' });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Delete operation failed', error: err.message });
  }
});

app.delete("/api/rest/v1/replacements/:id", async (req, res) => {
  try {
    const result = await req.Replacement.deleteOne({ id: parseInt(req.params.id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Delete operation failed', error: 'Replacement not found' });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Delete operation failed', error: err.message });
  }
});

app.delete("/api/rest/v1/categories/:id", async (req, res) => {
  try {
    const result = await req.Category.deleteOne({ id: parseInt(req.params.id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Delete operation failed', error: 'Category not found' });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Delete operation failed', error: err.message });
  }
});

// PUT endpoints
app.put("/api/rest/v1/motorcycles/:id", async (req, res) => {
  try {
    const result = await req.Motorcycle.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      { $set: req.body },
      { returnDocument: "after" }
    );
    res.json(result.value);
  } catch (err) {
    res.status(500).json({ message: 'Update operation failed', error: err.message });
  }
});

app.put("/api/rest/v1/replacements/:id", async (req, res) => {
  try {
    const result = await req.Replacement.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      { $set: req.body },
      { returnDocument: "after" }
    );
    res.json(result.value);
  } catch (err) {
    res.status(500).json({ message: 'Update operation failed', error: err.message });
  }
});

app.put("/api/rest/v1/categories/:id", async (req, res) => {
  try {
    const result = await req.Category.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      { $set: req.body },
      { returnDocument: "after" }
    );
    res.json(result.value);
  } catch (err) {
    res.status(500).json({ message: 'Update operation failed', error: err.message });
  }
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
