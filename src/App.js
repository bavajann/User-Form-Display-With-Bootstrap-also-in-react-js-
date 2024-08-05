// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App container">
      <h1 className="mt-5">User Information Form</h1>
      <Form />
    </div>
  );
}

export default App;
