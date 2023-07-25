const express = require("express");
const { OfferingDataGet, RequestingDataGet, TradeAdd } = require("./Controller/CTL");
const  {UserLogin, UserRegister}  = require("./Controller/usercontroller");
const Routes = express.Router();

console.log("postman connected: ")

Routes.post("/trade_add", TradeAdd);
Routes.post("/getofferingdata", OfferingDataGet);
Routes.post("/getrequestingdata", RequestingDataGet);
Routes.post("/login", UserLogin);
Routes.post("/register", UserRegister)

module.exports = Routes;