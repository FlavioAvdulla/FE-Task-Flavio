import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./UpdateUser.css";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [bs, setBs] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:8000/users/${id}`);
      const data = await res.json();
      setName(data.name);
      setUsername(data.username);
      setEmail(data.email);
      setPhone(data.phone);
      setWebsite(data.website);
      setCompanyName(data.company.companyName);
      setCatchPhrase(data.company.catchPhrase);
      setBs(data.company.bs);
      setStreet(data.address.street);
      setSuite(data.address.suite);
      setCity(data.address.city);
      setZipcode(data.address.zipcode);
      setLatitude(data.address.geo.lat);
      setLongitude(data.address.geo.lng);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { 
      name, 
      username,
      email, 
      phone,
      website,
      company: {
        companyName,
        catchPhrase,
        bs,
      },
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat: latitude,
          lng: longitude
        }
      }
    };
    await fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });
    navigate('/read-user');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="update-user">
        <h1>Update User</h1>
        <div className="form-container">
          <div className="user-info">
            <label>User Info</label>
            <div className="user-inputs">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
              <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" required />
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" required />
              <input type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} placeholder="Catch phrase" required />
              <input type="text" value={bs} onChange={(e) => setBs(e.target.value)} placeholder="Bs" required />
            </div>
          </div>

          <div className="address-info">
            <label>Address Info</label>
            <div className="address-inputs">
              <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" required />
              <input type="text" value={suite} onChange={(e) => setSuite(e.target.value)} placeholder="Suite" />
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
              <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode" required />
              <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder="Latitude" />
              <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder="Longitude" />
            </div>
          </div>
          <button type="submit">Update User</button>
        </div>
      </div>
    </form>
  );
};

export default UpdateUser;
