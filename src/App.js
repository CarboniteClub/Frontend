import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Landing2 from "./Pages/Landingv2";
import Waitlist from "./Pages/Waitlist";
import LeaderBoard from "./Pages/LeaderBoard";
import Dashboard from "./Pages/Dashboard";
import Dashboard2 from "./Pages/Dashboardv2";
import Tasks from "./Pages/Tasks";
import Rewards from "./Pages/Rewards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing2 />} />
      <Route path="/2" element={<Landing />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/rewards" element={<Rewards />} />
    </Routes>
  );
}

export default App;
