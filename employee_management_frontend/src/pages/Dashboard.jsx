import React from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth(); // ✅ use custom hook

  if (!user) {
    return <h2>Loading...</h2>; // show while user is not set
  }

  return (
    <div>
      <h2>Welcome {user.name}, Role: {user.role}</h2>
    </div>
  );
}

export default Dashboard;
