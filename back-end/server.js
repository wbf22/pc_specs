const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const recommendedPartSchema = new mongoose.Schema({
  type: String,
  name: String,
  dateCreated: String,
  votes: Number,
});

// Create a model for items in the museum.
const RecommendedPart = mongoose.model('RecommendedPart', recommendedPartSchema);


// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/recommendations', async (req, res) => {
  if (req.body.votes != 0) {
    res.sendStatus(403);
  }
  else{
    const recommendation = new RecommendedPart({
      type: req.body.type,
      name: req.body.name,
      dateCreated: req.body.dateCreated,
      votes: req.body.votes,
    });
  
    try {
      await recommendation.save();
      res.send(recommendation);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
});

// Get a list of all of the items in the museum.
app.get('/api/recommendations', async (req, res) => {
  try {
    let recommendations = await RecommendedPart.find();
    res.send(recommendations);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// For doing Deletes
app.delete('/api/recommendations/:id', async (req, res) => {
  try {
    await RecommendedPart.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// For updating votes
app.put('/api/recommendations/:id', async (req, res) => {
  try {
    let recommendation = await RecommendedPart.findOne({
      _id: req.params.id
    });

    if (Math.abs(req.body.votes - recommendation.votes) != 1) {
      res.sendStatus(403);
    }
    else {
      recommendation.votes = req.body.votes;
      await recommendation.save();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
