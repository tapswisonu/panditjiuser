import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';

// Layout
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Auth from './pages/Auth';
import About from './pages/About';
import Services from './pages/Services';
import Poojas from './pages/Poojas';
import PanditListing from './pages/PanditListing';
import PanditProfile from './pages/PanditProfile';
import BookPooja from './pages/BookPooja';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Dashboard from './pages/Dashboard';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Core */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          {/* Services & Poojas */}
          <Route path="/services" element={<Services />} />
          <Route path="/poojas" element={<Poojas />} />
          <Route path="/book/:id" element={<BookPooja />} />

          {/* Pandits */}
          <Route path="/pandits" element={<PanditListing />} />
          <Route path="/pandit/:id" element={<PanditProfile />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<Pricing />} />

          {/* User */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
