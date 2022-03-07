// ignore
const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
//ignore



//compliments
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
  
];
let globalId = compliments.length;

// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];


res.status(200).send(randomCompliment);


//user creates compliment
app.post("/api/compliment/", (req, res) => {
   let newCompliment = req.body;

  newCompliment.id = globalId

  newCompliment.push(compliments);

  res.status(200).send(compliments)
  
})
  // ? was in the demo

  app.post('/api/compliment/', createCompliment);
  app.put('/api/compliment/:id', changeCompliment);
  app.delete('/api/compliment:id', deleteCompliment);
  
});
//fortunes
app.get("/api/fortune", (req, res) => {
  const fortunes = ["you are going to ace this test", 
     "you are going to have a birthday soon", 
      "you will become the world's greatest coder.",
      "you will eat lunch at around 1 pm Monday-Friday",
      "you will have a great day",]
      
      //choose a random fortune
      let randomI = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomI];
      res.status(200).send(randomFortune);

    })
// user creates fortune
app.post("/api/fortune/", (req, res) => {
   let newFortune = req.body;

  newFortune.id = globalId

  newFortune.push(fortunes);

  res.status(200).send(fortunes)
  
})
// user updates fortune
app.put("/api/fortune/", (req, res) => {
  
})


app.listen(4000, () => console.log("Server running on 4000"));
