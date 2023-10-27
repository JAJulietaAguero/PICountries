const { Router } = require('express');
const router = Router()
const Activity = require('../models/Activity');

router.get("/", async (req, res) => {
    try {
        const allActivities = await Activity.findAll();
        res.status(200).json(allActivities)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
});

module.exports = router;