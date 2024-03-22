import express from "express";


const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Server</h1>");
});

app.listen(5000, () => {
  console.log(`server listening on port ${PORT}`);
});
