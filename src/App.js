import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landingv2";
import Waitlist from "./Pages/User/Waitlist";
import LeaderBoard from "./Pages/User/LeaderBoard";
import Dashboard from "./Pages/User/Dashboard";
import Dashboard2 from "./Pages/Dashboardv2";
import Tasks from "./Pages/User/Tasks";
import Rewards from "./Pages/User/Rewards";
import Customize from "./Pages/User/Customize";
import Guidelines from "./Pages/User/Guidelines";
import CompanyDashBoard from "./Pages/CompanyPages/Dashboard";
import AddTasks from "./Pages/CompanyPages/AddTasks";
import User from "./Pages/Vault/User";
import Validator from "./Pages/Vault/Validator";
import QRScanner from "./Pages/Vault/QRScanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/guidelines" element={<Guidelines />} />

      <Route path="/company/dashboard" element={<CompanyDashBoard />} />
      <Route path="/company/add-tasks" element={<AddTasks />} /> */}

      {/* Carbonite Vault */}
      <Route path="/vault/user" element={<User />} />
      <Route path="/vault/validator" element={<Validator />} />
      <Route path="/qr-scanner" element={<QRScanner />} />
    </Routes>
  );
}

export default App;
