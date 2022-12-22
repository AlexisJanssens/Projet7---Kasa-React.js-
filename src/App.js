// react frameworks
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

// pages by React BrowserRouter
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Logement from './Pages/Logement/Logement';

// components 
import Error404 from './Pages/Error404/Error404';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// globalStyle
import GlobalStyle from './utils/style/GlobalStyle';


function App () {
    return (
    <Router>
        <GlobalStyle/>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/Accomodation/:idLogement' element={<Logement/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='*' element={<Error404 />}></Route>
        </Routes>
        <Footer/>
    </Router>
    )
}

export default App

