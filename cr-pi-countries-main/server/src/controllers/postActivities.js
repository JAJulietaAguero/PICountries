const Activity = require('../models/Activity');

const createActivity = async (name, difficulty, duration, season) => {
    return await Activity.findOrCreate({
        where: { name},
        defaults: {
            difficulty,
            duration,
            season
        }
    })
};

module.exports = {
    createActivity
}