// import logo from "./logo.svg";
// import GFG from "./GFG_black.svg";
import "./App.css";
// import Header from './components/navbar/header';
import Header from "./components/navbar/Header";
import Intro from "./components/Intro/Intro";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

  
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/' element={<Intro />} /> */}
        </Routes>

      <Footer />
      {/* <img src={logo} /> */}
    </div>
  );
}

export default App;
