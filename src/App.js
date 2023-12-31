import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About  from './Pages/About';
import Contact from './Pages/Contact';
import LoginSignUp from './Pages/Login'
import Home from './Pages/Home'
import { Signup } from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/signup' element={<Signup />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
