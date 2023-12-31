//backend

require('dotenv').config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:4000", "https://adex-multi-app-suite.vercel.app"],
};

app.use(cors(corsOptions));

app.get("/api/football-matches", async (req, res) => {
  console.log("adex");
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": "70f5fc17b1374351b458e3f71cb76249",
        },
      }
    );

  console.log("adex adex");
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
