const express = require("express");
const router = express.Router();
const {protect} = require('../MiddleWare/AuthMiddleWare')
const {
  createChat,
  accessChat,
  createGroup,
  editGroup,
  removeFromGroup,
  addToGroup,
} = require("../Routers/ChatRoutes");

router.post("/createChat",protect,createChat);
router.get("/accessChat",protect,accessChat);
router.post("/createGroup",protect,createGroup);
router.put("/editGroup",protect,editGroup);
router.put("/removeFromGroup",protect,removeFromGroup);
router.put("/addToGroup",protect,addToGroup);


module.exports = router