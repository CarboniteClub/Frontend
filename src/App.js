import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Waitlist from "./Pages/Waitlist";
import Rewards from "./Pages/LeaderBoard";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/leaderboard" element={<Rewards />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
