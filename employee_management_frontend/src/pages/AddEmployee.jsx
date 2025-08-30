import React, { useState } from "react";
import API from "../api";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/employees", { name, email });
    alert("Employee added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddEmployee;
