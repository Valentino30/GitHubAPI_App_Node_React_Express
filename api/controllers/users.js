const axios = require("axios");

const getUsers = (req, res, next) => {
  axios
    .get("https://api.github.com/users")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => next(err));
};

const getUser = (req, res, next) => {
  axios
    .get(`https://api.github.com/users/${req.params.userId}`)
    .then((response) => {
      res.json([response.data]);
    })
    .catch((err) => next(err));
};

const getUserRepos = (req, res, next) => {
  axios
    .get(`https://api.github.com/users/${req.params.userId}/repos`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => next(err));
};

module.exports = {
  getUser,
  getUsers,
  getUserRepos,
};
