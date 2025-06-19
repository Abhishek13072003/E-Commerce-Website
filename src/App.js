import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AppLayout from './layout/AppLayout';
import Dashboard from "./pages/Dashboard";
import { useState } from 'react';

function App() {
  const[userDetails, setUserDetails]=useState(null);
  const updateUserDetails=(updateData)=>{
    setUserDetails(updateData);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
  path="/login"
  element={
    <AppLayout>
      <Login updateUserDetails={updateUserDetails} />
    </AppLayout>
  }
/>
      <Route path="/dashboard" element={<Dashboard><Login /></Dashboard>} />
    </Routes>
  );
}

export default App;
