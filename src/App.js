import logo from './logo.svg';
import GFG from './GFG_black.svg'
import './App.css';
// import Header from './components/navbar/header';
import Header from './components/navbar/Header';
import Intro from './components/Intro/Intro';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
