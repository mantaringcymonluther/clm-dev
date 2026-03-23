import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/layout/Footer";
import ViewAllProjectsPage from "@/pages/ViewAllProjectsPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Experience />
                  <Testimonials />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<ViewAllProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
