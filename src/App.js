import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import Navbar from './components/Navbar'
import LearnMore from './pages/LearnMore';
import JoinUs from './pages/JoinUs';

function App() {
    return (
        <>  
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/learn-more' element={<LearnMore />} />
                <Route path='/join' element={<JoinUs />} />
            </Routes>
        </>
    )
}

export default App
