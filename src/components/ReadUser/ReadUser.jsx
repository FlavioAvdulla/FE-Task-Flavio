import React, { useEffect, useState } from 'react';
import "./ReadUser.css"

const ReadUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:8000/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className='read-users'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {user.address
                ? `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
                : 'N/A'}
            </td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
              {user.company
                ? `${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`
                : 'N/A'}
            </td>
            {/* <td>X</td> */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ReadUser;
