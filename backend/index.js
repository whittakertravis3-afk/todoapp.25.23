import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/task.js";

// --------  VARABLES  --------
const port = 3000; // set the port number for the server to listen on
const app = express(); // use express.js framework to do XYZ

// --------  MIDDLEWARE  --------

app.use(express.json()); // middleware to parse incoming JSON data
app.use(cors()); // allows API request to be made from other locations

// --------  API ROUTES  --------

app.use("/", taskRoutes);

// --------  APP STARTUP  --------

// LIFE
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { autoIndex: false });
    console.log("✅ DATABASE connected");

    await mongoose.syncIndexes();
    console.log("indexes. synced!");

    app.listen(port, () => {
      console.log(`✅ To Do App is live on port ${port}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
