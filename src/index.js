const express = require("express");
const cors = require("cors");
const app = express();

//Old connection to database
/* const Database = require("better-sqlite3"); */
/* const db = new Database('./src/db/database.db', { verbose: console.log }); */

//New connection to database
const Database = require("mysql");

const db = Database.createConnection({
  host: "91.142.215.34",
  user: "sampling",
  password: "&Ayx7f79",
  database: "sampling",
});

//same as php - we must start and end connections everytime we make a query
/* db.connect();

db.query("SELECT * FROM `difusion_rrss`", function (error, results, fields) {});

db.end(); */

app.use(cors());
app.use(express.json());

const serverPort = 8088;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

/* app.set("view engine", "ejs"); */

app.post("/users", (req, res) => {
  const userLogin = req.body;

  db.connect();
  db.query(
    "SELECT * FROM users WHERE `mail` = ? AND `pwd` = ?",
    [userLogin.user, userLogin.pass],
    function (error, results) {
      if (error) throw error;
      if (results) {
        const responseSuccess = {
          success: true,
          infoQuery: results,
        };
        res.json(responseSuccess);
      } else {
        const responseFail = {
          success: false,
          errorMessage: "User not found",
        };
        res.json(responseFail);
      }
    }
  );
});

//Static servers
const staticServerPath = "src/public-react";
app.use(express.static(staticServerPath));
