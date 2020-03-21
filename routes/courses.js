const { Router } = require('express');
const Courses = require("../models/course");
const router = Router();

router.get('/', async (req, res) => {
    const courses = await Courses.getAll();
    res.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    });
});

router.get('/:id', async (req, res) => {
    const course = await Courses.getID(req.params.id);
    res.render('course', {

        title: 'Courses',
        course
    });
});


module.exports = router;
