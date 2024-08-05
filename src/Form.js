// src/Form.js
import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [user, setUser] = useState({ name: '', email: '', number: '' });
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, user]);
    setUser({ name: '', email: '', number: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={user.number}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit Form
        </button>
      </form>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
