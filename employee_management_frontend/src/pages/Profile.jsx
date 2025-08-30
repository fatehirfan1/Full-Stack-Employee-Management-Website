import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}

export default Profile;
