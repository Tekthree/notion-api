"use strict";
const express = require("express");
const getVideos = require("./services/notion.js");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("public"));

app.get("/schedule", async (req, res) => {
  const schedule = await getVideos();
  res.json(schedule);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
