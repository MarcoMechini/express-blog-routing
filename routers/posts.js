//file che contiene le rotte necessarie per l'entità post

const express = require("express");
const router = express.Router();
const postsList = require("../data/pizzas")

//index
router.get('/', (req, res) => {
    res.json('Sono nel router');
})

//create
router.post('/', (req, res) => {
    res.json('Sono post');
})

//show  
router.put('/', (req, res) => {
    res.json('Sono put');
})

//update

//delete
module.exports = router
