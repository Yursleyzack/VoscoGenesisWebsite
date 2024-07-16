import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import AboutUs from "./pages/AboutUs";
import Downloads from "./pages/Downloads";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AboutUs />} path="/About-Us" />
        <Route element={<Downloads />} path="/Downloads" />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
