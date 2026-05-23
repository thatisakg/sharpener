const express = require('express');
const student = require('./routes/student');
const app = express();

app.use(student);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});