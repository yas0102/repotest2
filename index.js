const express = require("express");
const client = require("./connection.js");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`Listening at ${process.env.PORT}`)
);
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());

let data;

app.post("/api", (request, response) => {
  console.log("I got a request !");
  console.log(request.body);
  data = request.body;
  response.json({
    status: "success",
    query: data.q,
  });
  app.get("/api", (req, res) => {
    client.query(data.q, (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    });
    client.end;
  });
});

client.connect();
