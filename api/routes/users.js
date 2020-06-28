const express = require("express");
const controller = require("../controllers/users");

const router = express.Router();

router.get("/", controller.getUsers);
router.get("/:userId", controller.getUser);
router.get("/:userId/repos", controller.getUserRepos);

module.exports = router;
