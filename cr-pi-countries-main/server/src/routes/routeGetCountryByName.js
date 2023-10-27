const { Router } = require('express');
const router = Router()
const Country = require('../models/Country');

router.get("/", async (req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
            const countriesByName = await Country.findAll();
            res.status(200).json(countriesByName)
        }
        else {
            const countryByName = await Country.findAll({
                where: {
                    name
                }
            })
            res.status(200).json(countryByName);
        }
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;