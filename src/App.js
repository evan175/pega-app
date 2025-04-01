import './App.css';
import { Routes, Route, Link, Router, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import NavBar from './components/nav-bar';
import Bug from './pages/bug';
import Epic from './pages/epic';

function App() {
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <NavBar></NavBar>

          <div className='main-content'>
            <Routes >
              <Route path="" element={<Home />} />
              <Route path="/bug" element={<Bug />} />
              <Route path="/epic" element={<Epic />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
