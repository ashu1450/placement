const express  = require("express");
const { addArchive, getAllArchives, deleteArchive, updateArchive } = require("../controllers/archiveController");
const {isAuthenticatedUser} = require("../middleware/auth");


const router = express.Router();

router.route("/add/archive").post(isAuthenticatedUser, addArchive);
router.route("/archives").get( getAllArchives);
router.route("/archive/:id")
.delete(isAuthenticatedUser, deleteArchive)
.put(isAuthenticatedUser, updateArchive);
module.exports = router;