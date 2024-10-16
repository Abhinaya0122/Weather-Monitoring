const express = require('express');
const connection = require('./connection');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/crops/:season', async (req, res) => {
  try {
    const database = connection.db("Weather_App");
    const collection = database.collection("Crop_recommendations");

    console.log(req.params.season);
    

    const documents = await collection.findOne();

    const crops = documents[req.params.season];

    if (!crops) {
      return res.status(404).send("Crops not found.");
    }

    res.status(200).json(crops);
  } catch (error) {
    console.error("Error fetching crops:", error);
    res.status(500).send("Error fetching data.");
  }
});

app.listen(5000, () => {
  console.log("Server has started.");
});
