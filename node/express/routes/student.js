const express = require('express');

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
});

router.get('/students', (req, res) => {
  const studentNames = students.map(student => student.name).join(', ');
  res.send(`Students: ${studentNames}`);
});

router.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  const student = students.find(s => s.id === studentId);

  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.send('Student not found');
  }
});

router.get('/courses', (req, res) => {
  const courseNames = courses.map(course => course.name).join(', ');
  res.send(`Courses: ${courseNames}`);
});

router.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);

  const course = courses.find(c => c.id === courseId);

  if (course) {
    res.send(
      `Course: ${course.name}, Description: ${course.description}`
    );
  } else {
    res.send('Course not found');
  }
});

router.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = router;