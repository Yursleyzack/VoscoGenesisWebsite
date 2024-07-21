import "./Styles/App.css";
import "./Styles/responsive.css";

import Main from "./pages/Main";

import { Route, Routes } from "react-router";
import AboutUs from "./pages/AboutUs";
import Downloads from "./pages/Downloads";
import Welcome from "./pages/Welcome";
import ZeroCarbon from "./pages/ZeroCarbon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Main />} path="/Home" />
        <Route element={<AboutUs />} path="/About-Us" />
        <Route element={<Downloads />} path="/Downloads" />
        <Route element={<ZeroCarbon />} path="/ZeroCarbon" />
      </Routes>
    </div>
  );
}

export default App;
