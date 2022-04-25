const express = require("express");
const app = express();
const cors = require("cors");

//pg.Pool allows postgres queries
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

// ROUTES

  //POST character
app.post("/chars", async (req, res) => {
  try {
    const { name, auth, charObj } = req.body;
    const newChar = await pool.query(
      "INSERT INTO chars (name, auth, charObj) VALUES($1, $2, $3) RETURNING *",
      [name, auth, charObj]
    );
    res.json(newChar.rows);
  } catch (err) {
    console.error(err.message);
  }
});

  //GET ALL characters
app.get("/chars", async (req, res) => {
  try {
    const allChars = await pool.query(
      "SELECT * FROM chars"
    );
    res.json(allChars.rows);
  } catch (err) {
    console.error(err.message)
  }
})

  //GET ONE characters
  app.get("/chars/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const char = await pool.query(
        "SELECT * FROM chars WHERE char_id = $1", [id]
      );
      res.json(char.rows);
    } catch (err) {
      console.error(err.message)
    }
  })

  //UPDATE ONE characters
  app.put("/chars/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, auth, charObj } = req.body;
      const updateChar = await pool.query(
        "UPDATE chars SET name = $1, auth = $2, charObj = $3 WHERE char_id = $4", [name, auth, charObj, id]
      );
      res.json(`Character of id: ${id} was updated.`);
    } catch (err) {
      console.error(err.message)
    }
  })

  //DELETE ONE character
  app.delete("/chars/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteChar = await pool.query(
        "DELETE FROM chars WHERE char_id = $1", [id]
      );
      res.json(`Character of id: ${id} was deleted.`);
    } catch (err) {
      console.error(err.message)
    }
  })

// ***************NOT FOR PRODUCTION***************
  //DELETE ALL characters
  app.delete("/chars/", async (req, res) => {
    try {
      const deleteAllChar = await pool.query(
        "TRUNCATE chars"
      );
      res.json(`All characters were deleted.`);
    } catch (err) {
      console.error(err.message)
    }
  })

app.listen(5000, () => {
  console.log('server has started on port 5000')
})