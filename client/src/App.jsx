import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './admin/Login/Login';


function App() {
  return (
 <div className="App">
  <Router>
    <Routes>
  <Route exact path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  </Routes>
  </Router>
  </div>
  );
};

export default App; 
