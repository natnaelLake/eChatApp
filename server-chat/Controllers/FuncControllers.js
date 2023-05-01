const express = require("express");
const router = express.Router();

const {search} = require('../Routers/FuncRoutes');
const {protect} = require('../MiddleWare/AuthMiddleWare')
router.get('/search',protect,search)

module.exports = router