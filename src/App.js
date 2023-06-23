import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/layout/Navbar.js'
import Home from './components/pages/Home.js'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
