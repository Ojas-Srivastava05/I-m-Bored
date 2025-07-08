import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config()
import querystring from 'querystring';

const app = express();
const port = process.env.PORT || 3000; // Use environment port or 3000 as default
const apiUrl = process.env.API_URL || "https://bored-api.appbrewery.com";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/random`);
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "Failed to fetch activity. Please try again later.",
    });
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const type = req.body.type;
    const participants = req.body.participants;
    let filterUrl = `${apiUrl}/filter?`;
    const queryParams = {};

    if (type) {
      queryParams.type = type;
    }
    if (participants) {
      queryParams.participants = participants;
    }

    if (Object.keys(queryParams).length > 0) {
      filterUrl += querystring.stringify(queryParams);
    }

    const response = await axios.get(filterUrl);
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
