import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReadUser.css";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";

const ReadUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:8000/users/${id}`, { method: 'DELETE' });
      setUsers(users.filter(user => user.id !== id));
      alert(`User with ID ${id} has been deleted`);
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

  const handleEditUser = (id) => {
    navigate(`/update-user/${id}`);
  };

  return (
    <div className="read-users">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>CatchPhrase</th>
            <th>Bs</th>
            <th className="edit">Edit</th>
            <th className="delete">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.companyName}</td>
              <td>{user.company.catchPhrase}</td>
              <td>{user.company.bs}</td>
              <td className="edit" onClick={() => handleEditUser(user.id)}><AiFillEdit className="edit-icon"/></td>
              <td className="delete" onClick={() => deleteUser(user.id)}><IoIosCloseCircle className="close-icon"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadUser;
