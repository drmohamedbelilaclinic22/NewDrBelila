import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import SmileGallery from './components/SmileGallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DoctorDetail from './components/DoctorDetail';

function App() {
  // Security measures to prevent right-click, text selection, dragging, and certain keyboard shortcuts
  useEffect(() => {
    const preventDefault = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboard = (e: KeyboardEvent) => {
      // Prevent Ctrl+A (Select All), Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+V (Paste), Ctrl+S (Save), F12 (Developer Tools)
      if (
        (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 's')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I (Developer Tools)
        (e.ctrlKey && e.shiftKey && e.key === 'C') || // Ctrl+Shift+C (Inspect Element)
        (e.ctrlKey && e.shiftKey && e.key === 'J')    // Ctrl+Shift+J (Console)
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('selectstart', preventDefault);
    document.addEventListener('dragstart', preventDrag);
    document.addEventListener('keydown', preventKeyboard);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('selectstart', preventDefault);
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('keydown', preventKeyboard);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={
            <div className="min-h-screen overflow-x-hidden">
              <Header />
              <main>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="team">
                  <Team />
                </section>
                <section id="gallery">
                  <SmileGallery />
                </section>
                <section id="reviews">
                  <Reviews />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </main>
              <Footer />
              
              {/* Floating Facebook Icon */}
              <a
                href="https://www.facebook.com/profile.php?id=100094644267456"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce"
                aria-label="Visit our Facebook page"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          } />
          
          {/* Doctor Detail Page */}
          <Route path="/doctor/:slug" element={<DoctorDetail />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;