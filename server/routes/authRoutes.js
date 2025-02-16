const express = require("express");
const { test, registerUser, loginUser, getUser, logoutUser } = require("../controllers/authController");
const cors = require("cors");
const router = express.Router();


router.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


router.route("/").get(test);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(getUser);
router.route("/logout").get(logoutUser);



module.exports = router;