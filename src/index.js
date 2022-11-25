import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About/About';
import Error404 from './Components/Error404/Error404';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Logement from './Pages/Logement/Logement';
import GlobalStyle from './utils/style/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Accomodation' element={<Logement/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
