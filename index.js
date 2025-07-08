import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = process.env.PORT || 3000; // Use environment port or 3000 as default

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const type = req.body.type;
    const participants = req.body.participants;
    let apiUrl = "https://bored-api.appbrewery.com/filter?";
    if (type) {
      apiUrl += `type=${type}&`;
    }
    if (participants) {
      apiUrl += `participants=${participants}&`;
    }

    const response = await axios.get(apiUrl);
    const result = response.data;
    console.log(result);

    if (result.length > 0) {
      res.render("index.ejs", {
        data: result[Math.floor(Math.random() * result.length)],
      });
    } else {
      res.render("index.ejs", {
        error: "No activities match your criteria.",
      });
    }
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "No activities match your criteria.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
