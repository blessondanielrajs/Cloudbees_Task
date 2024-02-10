import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:username" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
