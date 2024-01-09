import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup';
import FreighterDashboard from './Pages/FreighterDashboard/FreighterDashboard';
import MyQuotes from './Pages/MyQuotes/MyQuotes';
import GetQuote from './Pages/GetQuote/GetQuote'; 
import MyOffers from './Pages/MyOffers/MyOffers'; 
import UserProfile from './Pages/UserProfile/UserProfile';

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/fdashboard' element={<FreighterDashboard />} />
            <Route path='/myquotes' element={<MyQuotes />} />
            <Route path='/getquote' element={<GetQuote />} />
            <Route path='/myoffers' element={<MyOffers />} />
            <Route path='/userprofile' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userFirstName: state.userFirstName
  };
};

export default connect(mapStateToProps)(App);
