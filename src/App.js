import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import './App.css';
import Applayout from './components/layout';

function App() {
  return (
    <div className="App">
      <Router basename="/Portpolio">
      <Routes>
        <Route path="/" element={ <Applayout/>} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
