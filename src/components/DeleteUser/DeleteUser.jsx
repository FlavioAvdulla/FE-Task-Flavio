import React, { useState } from "react";
import "./DeleteUser.css"

const DeleteUser = () => {
  const [userId, setUserId] = useState("");

  const handleDelete = async () => {
    if (userId.trim() === "") {
      alert("Please enter a valid User ID");
      return;
    }

    await fetch(`http://localhost:8000/users/${userId}`, {
      method: "DELETE",
    });

    setUserId("");
    alert(`User with ID ${userId} has been deleted`);
  };

  return (
    <div className="delete-user">
      <div className="delete-container">
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button onClick={handleDelete}>Delete User</button>
      </div>
    </div>
  );
};

export default DeleteUser;
