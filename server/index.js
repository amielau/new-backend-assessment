// ignore
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); 

const users = []

//compliments
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
  
];
 
// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];


res.status(200).send(randomCompliment);


})
//fortunes
app.get("/api/fortune", (req, res) => {
  const fortunes = ["you are going to ace this test", 
     "you are going to have a birthday within the year", 
      "you will become the world's greatest coder.",
      "you will eat lunch at around 1 pm Monday-Friday",
      "you will have a great day"];
      
      //choose a random fortune
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];

      res.status(200).send(randomFortune);

    });

    app.post("/api/name", (req, res) => {
      const {newName} = req.body

      users.push(newName);
      res.status(200).send(users);
    });

    app.delete("/api/delete/:id", (req, res) => {
        console.log(req.params);

        if(req.params.id) {
          users.splice(req.params.id, 1);
          res.status(200).send(users);
        } else {
          res.status(400).send("that is not a number");
        }
        
    });
    app.put("/api/edit/:id", (req, res) => {
      
      let editId = req.params.id;
      let preChange = users[editId];
      users[editId] = req.body.nameChange;

      res.status(200).send(`you have updated ${preChange} to ${users[editId]}`)

      console.log(req.params)
      console.log(req.body)
    })

app.listen(4000, () => console.log("Server running on 4000"))

// what do req. body, query, params DO?
// what is typecasting to an int? 1:25:00