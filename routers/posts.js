//file che contiene le rotte necessarie per l'entità post

const express = require("express");
const router = express.Router();
const postsList = require("../data/pizzas")

//index
router.get('/', (req, res) => {
    res.json(postsList)
})

//show
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    const foundPost = postsList.find(post => post.id === postId)
    res.json(foundPost);
    // for (let i = 0; i < postsList.length; i++) {
    //     const curPost = postsList[i];
    //     if (curPost.id == postId) {
    //         res.json(curPost)
    //     }
    // }
})

//create
router.post('/', (req, res) => {
    res.json('Creazione del post');
})

//update  
router.put('/', (req, res) => {
    res.json(`Modifica dei dati del post numero ${postId}`);
})

//modify
router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica dell'curPosto del post numero ${postId}`);
})

//destory
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.json(`Cancellazione del post numero ${postId}`);
})



module.exports = router
