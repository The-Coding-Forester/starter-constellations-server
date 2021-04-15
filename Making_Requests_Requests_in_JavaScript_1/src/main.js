const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      console.log(response.data.map((constellation) => constellation.name));
      return response.data.map((constellation) => constellation.name);
    });
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get(`${BASE_URL}/constellations`)
    .then((response) => {
      const result = response.data.filter((constellation) => {
        return constellation.quadrant === quadrant;
      });
      console.log(result);
    });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
