const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/notifications", (req, res) => {
  const data = {
    jobs: Math.floor(Math.random() * 50),
    notifications: Math.floor(Math.random() * 140),
    messaging: Math.floor(Math.random() * 70), // Changed from 'messages' to 'messaging'
    networks: Math.floor(Math.random() * 80), // Changed from 'network' to 'networks'
  };
  res.json(data);
});

app.listen(3000, () => {
  console.log("server listening on : http://localhost:3000/notifications");
});
