const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const db = async () => {
  try {
    await mongoose.connect(process.env.Mongo, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Failed to connect to MongoDB:", e);
  }
};

db();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello user');
});

app.listen(port, () => {
  console.log(`Server connected successfully at ${port}`);
});

import {Hono} from "hono";
import {handle} from "@hono/node-server";

export default {
  fetch: handle(app),
};
/** */