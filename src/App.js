import "./App.css";

import Main from "./pages/Main";

import { Route, Routes } from "react-router";
import AboutUs from "./pages/AboutUs";
import Downloads from "./pages/Downloads";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Main />} path="/Home" />
        <Route element={<AboutUs />} path="/About-Us" />
        <Route element={<Downloads />} path="/Downloads" />
      </Routes>
    </div>
  );
}

export default App;
