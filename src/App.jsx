import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Capabilities from "./pages/Capabilities";
import EnergyInfrastructure from "./pages/EnergyInfrastructure";
import Projects from "./pages/Projects";
import Approach from "./pages/Approach";
import Insights from "./pages/Insights";
import ExecutiveTeam from "./pages/ExecutiveTeam";
import Contact from "./pages/Contact";
import IkechukwuProfile from "./pages/About/IkechukwuProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/about/executive-team/ikechukwu-ukaegbu"
          element={<IkechukwuProfile />}
        />
        <Route path="/about/executive-team" element={<ExecutiveTeam />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/capabilities/energy-clean-infrastructure" element={<EnergyInfrastructure />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
