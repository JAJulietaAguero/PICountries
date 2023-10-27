const { Country } = require('../db');

const allCountries = async () => {
    let coso = Country.findAll()
    console.log(coso)
    return null
  
};

module.exports = {
    allCountries
}