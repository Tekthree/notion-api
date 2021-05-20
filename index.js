'use strict'

const dotenv = require('dotenv').config();

const express = require('express');
const app = express();
const DATABASE = process.env.NOTION_DATABASE_ID;