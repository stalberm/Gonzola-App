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
import Workshop from "./pages/Workshop";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
import FormSubmitted from "./pages/FormSubmitted";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        <Route path="/form" element={<Form />} />
        <Route path="/formsubmitted" element={<FormSubmitted />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
