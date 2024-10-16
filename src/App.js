import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherApp from "./components/WeatherApp";
import About from "./components/About";
import GetWeather from "./components/GetWeather";
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/getweather" element={<GetWeather />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
