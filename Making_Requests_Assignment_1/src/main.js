const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const constellations_URL = `${BASE_URL}/constellations`;

function index() {
  axios
    .get(constellations_URL)
    .then((response) => console.log(response.data));
}

function create(body) {
  axios
    .post(constellations_URL, body)
    .then((response) => console.log(response.data));
}

function show(id) {
  axios
    .get(`${constellations_URL}/${id}`)
    .then((response) => console.log(response.data));
}

function update(id, body) {
  console.log(body);
  axios
    .put(`${constellations_URL}/${id}`, body)
    .then((response) => console.log(response.data));
}

function destroy(id) {
  axios
    .delete(`${constellations_URL}/${id}`)
    .then((response) => console.log(response.data));
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
