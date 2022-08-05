const express = require("express");
const userControllers = require("../controller/userController");

const router = express.Router();
router.post("/user", userControllers.createUser);
router.get("/user", userControllers.allUsers);
router.delete("/user/:id", userControllers.deleteUsers);
router.put("/user/:id", userControllers.updateUser);


module.exports = router;