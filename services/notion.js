"use strict";

const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client");

const DATABASE = process.env.NOTION_DATABASE_ID;

// Init client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

module.exports = async function getVideos() {
  const payload = {
    path: `databases/${DATABASE}/query`,
    method: "POST",
  };

  const { results } = await notion.request(payload);

  const schedule = results.map((page) => {
    console.log("made it");
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      time: page.properties.Time.rich_text[0].plain_text || "two",
    };
  });

  return schedule;
};
