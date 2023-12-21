const { Router } = require("express");
const { coursesData } = require("../controllers/course.controllers");

const router = Router();

router.get("/coursedata", coursesData);

module.exports = router;
