const {createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse} = require("../Controller/course.controller");

const router = require("express").Router();

router.post("/", createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;