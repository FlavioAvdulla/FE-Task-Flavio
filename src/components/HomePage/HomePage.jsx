import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css"

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      console.log("Home Page Activated");
    } else if (path.includes("/create-user")) {
      console.log("Create User Page Activated");
    }
  }, []);

  const handleReadUsers = () => {
    navigate("/read-user");
  };

  const handleCreateUser = () => {
    navigate("/create-user");
  };
  const handleDeleteUser = () => {
    navigate("/delete-user");
  };
  const handleUpdateUser = () => {
    navigate("/update-user");
  };

  return (
    <div className="homepage">
      <div className="homepage-container">
      <h1>Database Management</h1>
      <div className="homepage-buttons">
        <button onClick={handleReadUsers}>VIEW USERS</button>
        <button onClick={handleCreateUser}>CREATE USER</button>
        <button onClick={handleUpdateUser}>UPDATE USER</button>
        <button onClick={handleDeleteUser}>DELETE USER</button>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
