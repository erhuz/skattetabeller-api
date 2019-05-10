const fetch = require('node-fetch');
const { URL } = require('url');
const logger = require('../logger');

const municipalitiesService = async (req, res) => {
  const { municipality, year } = req.params;

  const url = new URL(`https://www.skatteverket.se/st-api/rest/v1/forsamlingar?inkomstar=${year}&kommun=${municipality}`);

  logger.debug(url);

  await fetch(url)
    .then(response => response.json())
    .then((json) => {
      const output = {
        asseblies: json
      };

      console.log(output);

      res.json(output);
    })
    .catch((err) => {
      logger.error(err);
    });
};

module.exports = municipalitiesService;
