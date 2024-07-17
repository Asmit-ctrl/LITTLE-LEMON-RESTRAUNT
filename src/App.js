// src/App.js
import React from 'react';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Little Lemon Restaurant</h1>
      </header>
      <BookingForm />
      <footer className="App-footer">
        <p>© 2024 Little Lemon Restaurant</p>
      </footer>
    </div>
  );
}

export default App;