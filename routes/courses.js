const { Router } = require("express");
const {
  coursesData,
  createCourse,
} = require("../controllers/course.controllers");

const router = Router();

router.get("/coursedata", coursesData);
router.post("/createcourse", createCourse);

module.exports = router;
