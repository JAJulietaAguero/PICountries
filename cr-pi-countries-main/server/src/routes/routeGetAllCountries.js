const router = require("express").Router();
const { allCountries } = require('../controllers/getAllCountries');

router.get("/", (req, res) => {
    try {
       res.status(200).json(allCountries)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
});

module.exports = router;