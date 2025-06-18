import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<login />} />
    </Routes>
  );
}

export default App;
