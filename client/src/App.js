import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "../node_modules/react-router/dist/index";
import { Homepage } from "./components/Homepage";
import { Scout } from "./components/Scout";
import { Members } from "./components/Members";
import { Client } from "./components/Client";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="scout-landing" element={<Scout />} />
      <Route path="client-landing" element={<Client />} />
      <Route path="members" element={<Members />} />
    </Routes>
  );
}

export default App;
