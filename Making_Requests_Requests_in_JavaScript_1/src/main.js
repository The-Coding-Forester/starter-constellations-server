const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

async function getAllNames() {
  const allNames = await axios.get(`${BASE_URL}/constellations`);
  console.log(allNames.data.map((constellation) => constellation.name));
  return allNames.data.map((constellation) => constellation.name);

}

async function getConstellationsByQuadrant(quadrant) {
  const constellationsByQuadrant = await axios.get(`${BASE_URL}/constellations`);
  const result = constellationsByQuadrant.data.filter((constellation) => {
    return constellation.quadrant === quadrant;
  });
  console.log(result);
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
