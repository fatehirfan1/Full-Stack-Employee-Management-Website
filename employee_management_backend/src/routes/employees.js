const express = require("express");
const router = express.Router();
const { getEmployees } = require("../controllers/employeeController");

// Get all employees
router.get("/", getEmployees);

module.exports = router;
