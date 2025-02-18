import React, { useState } from "react";
import "./CreateUser.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setuserName] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      username,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          latitude,
          longitude,
        },
      },
    };
    await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    setName("");
    setEmail("");
    setuserName("");
    setStreet("");
    setSuite("");
    setCity("");
    setCity("");
    setLatitude("");
    setLongitude("");
  };

  return (
    <div className="create-user">
      <h1>Create User</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="user-info">
            <label>User Info</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="address-info">
            <label>Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street"
              required
            />
            <input
              type="text"
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
              placeholder="Suite"
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              placeholder="Zipcode"
              required
            />
            <input
              type="text"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Latitude"
            />
            <input
              type="text"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Longitude"
            />
          </div>
            <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
