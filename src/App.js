import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Footer from "./components/footer"


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
