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
import UserLogin from "./components/UserLogin";
import FeesTable from "./components/FeesTable";
import PaymentGateway from "./components/PaymentGetwayPage";
import PaymentStatus from "./components/PaymentStatus";
import ApplyStatusTableData from "./components/ApplyStatusTable";
import CandidateTable from "./components/CandidateDetailTable";

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/fees-table" element={<FeesTable />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/status-table" element={<ApplyStatusTableData />} />
          <Route path="/candidate-details" element={<CandidateTable />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
