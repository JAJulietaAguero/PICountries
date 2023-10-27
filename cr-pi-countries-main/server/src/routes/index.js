const { Router } = require("express");
const routeGetActivities = require("./routeGetActivities");
const routeGetAllCountries = require("./routeGetAllCountries");
const routeGetCountryById = require("./routeGetCountryById");
const routeGetCountryByName = require("./routeGetCountryByName");
const routePostActivities = require("./routePostActivities");

const router = Router();

router.use("/countries", routeGetAllCountries);
router.use("/activities", routePostActivities);
router.use("/activities", routeGetActivities);
router.use("/countries/:cca3", routeGetCountryById);
router.use("/countries/name?=", routeGetCountryByName);
module.exports = router;
