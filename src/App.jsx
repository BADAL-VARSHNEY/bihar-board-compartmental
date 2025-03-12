import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import PersonalDetails from "./components/PersonalDetails";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
