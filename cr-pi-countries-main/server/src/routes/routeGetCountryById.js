const { Router } = require('express');
const router = Router()
const Country = require('../models/Country');

router.get("/", async (req, res) => {
    try {
        const { cca3 } = req.params;
        const countriesById = await Country.findByPk(cca3);
        res.status(200).json(countriesById)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
});

module.exports = router;