const express = require('express');
const router = express.Router();

router.post('/portfolios', (req, res, next) => {
    res.status(201).send(req.body);
})

router.put('/portfolios/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    })
})

router.delete('/portfolios/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send("Portfolio " + id + " foi deletado com sucesso.");
})

module.exports = router;