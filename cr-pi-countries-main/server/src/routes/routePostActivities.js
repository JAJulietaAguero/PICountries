const { Router } = require('express');
const router = Router()
const { createActivity } = require('../controllers/postActivities');

router.post("/activities", async (req, res) => {
    const { name, difficulty, duration, season } = req.body;
    try {
        const response = await createActivity(name, difficulty, duration, season)
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;