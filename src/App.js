import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Tutors from "./pages/Tutors";
import About from "./pages/About";
import Virtual from "./pages/Virtual";
import Classic from "./pages/Classic";
import Seminars from "./pages/Seminars";
import Consulting from "./pages/Consulting";
import Conversations from "./pages/Conversations";
import Clubs from "./pages/Clubs";
import Workshop from "./pages/Worshop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
    </>
  );
}

export default App;
