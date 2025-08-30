const pool = require("../config/db");

exports.getEmployees = async (req, res) => {
  try {
    const employees = await pool.query("SELECT * FROM users WHERE role = 'employee'");
    res.json(employees.rows);
  } catch (err) {
    console.error("Get Employees Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
