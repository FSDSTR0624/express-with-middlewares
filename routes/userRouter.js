const express = require("express");
const {
  getUserInfo,
  getAllUsersInfo,
  addNewUser,
} = require("../controllers/userController");

const router = express.Router();
const {
  commonMiddleware: { logger },
} = require("../middlewares/commonMiddelware.js");

router.use(logger);

// Rutas
router.get("/", getAllUsersInfo);
router.post("/", addNewUser);
router.get("/details", getUserInfo);
router.put("/details", (req, res) => {
  res.send("Has hecho un PUT a /user/details");
});
router.delete("/details", (req, res) => {
  res.send("Has hecho un DELETE a /user/details");
});

module.exports = router;
