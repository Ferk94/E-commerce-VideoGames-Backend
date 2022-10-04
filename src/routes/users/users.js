const express = require("express");

const router = express.Router();



router.get('/', (req, res, next) => {
    res.json('esta es mi ruta en users')
})




module.exports = router;