import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Landing2 from "./Pages/Landingv2";
import Waitlist from "./Pages/Waitlist";
import Rewards from "./Pages/LeaderBoard";
import Dashboard from "./Pages/Dashboard";
import Dashboard2 from "./Pages/Dashboardv2";
import Tasks from "./Pages/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing2 />} />
      <Route path="/2" element={<Landing />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/leaderboard" element={<Rewards />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;
