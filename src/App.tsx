import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import DeleteUser from "./components/DeleteUser/DeleteUser";
import ReadUser from "./components/ReadUser/ReadUser";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/read-user" element={<ReadUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
