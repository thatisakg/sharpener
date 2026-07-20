const db = require("../db/dbconnection.js");

// Insert Student
exports.createStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const sql =
            "INSERT INTO students (name,email,age) VALUES (?,?,?)";

        const [result] = await db.query(sql, [name, email, age]);

        console.log("INSERT:", result);

        res.status(201).json({
            message: "Student inserted successfully",
            id: result.insertId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// Get All Students
exports.getStudents = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM students");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

// Get Student By ID
exports.getStudentById = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM students WHERE id=?",
            [req.params.id]
        );
        if (rows.length === 0)
            return res.status(404).json({
                message: "Student not found"
            });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Student
exports.updateStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const [result] = await db.query(
            "UPDATE students SET name=?, email=?, age=? WHERE id=?",
            [name, email, age, req.params.id]
        );
        console.log("UPDATE:", result);
        if (result.affectedRows === 0)
            return res.status(404).json({
                message: "Student not found"
            });
        res.json({
            message: "Student updated successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

// Delete Student
exports.deleteStudent = async (req, res) => {

    try {

        const [result] = await db.query(
            "DELETE FROM students WHERE id=?",
            [req.params.id]
        );

        console.log("DELETE:", result);

        if (result.affectedRows === 0)
            return res.status(404).json({
                message: "Student not found"
            });

        res.json({
            message: "Student deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};