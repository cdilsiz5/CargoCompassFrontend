import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup';
import { FreighterDashboard } from './Pages/FreighterDashboard/FreighterDashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/freighterdashboard' element={<FreighterDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
