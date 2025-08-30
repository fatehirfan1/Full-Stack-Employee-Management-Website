const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employees");

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Employee Management API"));

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
