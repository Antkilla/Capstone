//ALL IMPORT STAEMENTS
const express = require('express');
const cors= require('cors');
const { Pool } = require('pg');
require('dotenv').config();

//INITIALIZE THE EXPRESS APP
const app = express();

//MIDDELWARE THAT IS NEEDED TO CONNECT TO THE FRONT AND BACK END
app.use(cors());
app.use(express.json());

//get all dealerships
app.get("/api/v1/dealership", async (req, res) => {
  console.log("backend api get ran");
  try {
    const results = await db.query("SELECT * FROM dealership")
    //console.log("results.rows: ", results.rows);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: { 
        dealerships: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//get a dealership
app.get("/api/v1/dealership/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query("SELECT * FROM dealership WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        dealership: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//create dealership
app.post("/api/v1/dealership", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query("INSERT INTO dealership(name, location, price_range) values ($1, $2, $3) returning *", 
    [req.body.name, req.body.location, req.body.price_range])

    res.status(201).json({
      status: "success",
      data: {
        dealership: results.rows[0], 
      },
    });
  } catch (err) {
    console.log(err)
  }
});

//UPDATE DEALERSHIP
app.put("/api/v1/dealership/:id", async (req, res) => {

  try {
    const results = await db.query("UPDATE dealership SET NAME = $1, location = $2, price_range = $3 where id = $4 returning *", 
    [req.body.name, req.body.location, req.body.price_range, req.params.id])

    res.status(200).json({
      status: "success",
      data: {
        dealership: results.rows[0], 
      },
    })
  } catch (err) {
    console.log(err)
  }
  console.log(req.params.id);
  console.log(req.body);
});
  
//DELETE DEALERSHIP
app.delete("/api/v1/dealership/:id", async (req, res) => {

  try {
    const results = await db.query("DELETE FROM dealership WHERE id = $1",
    [req.params.id])

    res.status(204).json({
      status: "success",
    });  
    } catch (err) {
      console.log(err);
    }
});

//SETUP DATABASE CONNECTION
const pool = new Pool();
const db = {
  query: (text, params) => pool.query(text, params),
};

// START THE SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});