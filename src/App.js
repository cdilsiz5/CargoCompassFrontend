import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup';
import { FreighterDashboard } from './Pages/FreighterDashboard/FreighterDashboard';
import MyQuotes from './Pages/MyQuotes/MyQuotes';
import GetQuote from './Pages/GetQuote/GetQuote'; 
import MyOffers from './Pages/MyOffers/MyOffers'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/fdashboard' element={<FreighterDashboard/>} />
          <Route path='/myquotes' element={<MyQuotes/>} />
          <Route path='/getquote' element={<GetQuote/>} />
          <Route path='/myoffers' element={<MyOffers/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
