import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import TimetablePage from "./pages/TimetablePage";
import TestBatchesPage from "./pages/TestBatchesPage";
import MethodologyPage from "./pages/MethodologyPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToHash from "./components/utils/ScrollToHash";

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/test-batches" element={<TestBatchesPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
