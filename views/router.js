import express from "express";

const Router = express.Router();

Router.route("/accounts")
  .get((req, res) => {
    res.send(
      "🤖 Accounts Route with GET method - this endpoint will get all of the accounts from the database"
    ); 
  })
  .post((req, res) => {
    res.send(
      "🤖 Accounts Route with POST method - this endpoint will create a new account in the database"
    );
  });

export default Router;