"use strict";

import express from "express";

import router from "../router/router.js";
import connectToDatabase from "../conectionDataBase/connectingDb.js";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use("/api", router);

const startApp = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (err) {
    console.log("Error start server:", err.message);
  }
};

startApp();
