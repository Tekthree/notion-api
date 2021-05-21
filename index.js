'use strict'

const dotenv = require('dotenv').config();
const {Client} = require('@notionhq/client');


const DATABASE = process.env.NOTION_DATABASE_ID;


// Init client
const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

const getVideos = async () => {
  const payload = {
    path: `databases/${DATABASE}/query`,
    method: 'POST'
  }

  const {results} = await notion.request(payload);

  const schedule = results.map((page)=>{
    console.log(page.properties.Description)
  })

  console.log(results);
}

getVideos();


