const Course = require("../Model/course.model");
const courseValidationSchema = require("../Validation/course.validator");


const createCourse = async (req, res) => {
    const { error, value } = courseValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const course = await Course.create(value);
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
        return res.status(200).json({ data: courses })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id)
        if (!course) {
            return res.status(404).json({ message: "Course Not Found!" })
        }
        res.status(200).json({ data: course })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedCourse = await Course.findOneAndUpdate({ _id: id }, data, { new: true })
        if (!updatedCourse) {
            return res.status(404).json({ message: "Course Not Found!" });
        }
        return res.status(200).json({ data: updatedCourse })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await Course.findByIdAndDelete(id)
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course Not Found!" });
        }
        res.status(204).send();

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };