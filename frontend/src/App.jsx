import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/layout/FloatingCTA';
import Home from './pages/Home';
import AboutClinic from './pages/AboutClinic';
import TourClinic from './pages/TourClinic';
import TreatmentDetail from './pages/TreatmentDetail';
import AdvancedTechnology from './pages/AdvancedTechnology';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-clinic" element={<AboutClinic />} />
        <Route path="/tour-the-clinic" element={<TourClinic />} />
        <Route path="/treatments/:slug" element={<TreatmentDetail />} />
        <Route path="/about" element={<PlaceholderPage title="About Clinic" />} />
        <Route path="/doctor" element={<PlaceholderPage title="Meet Dr Ruchi Jain" />} />
        <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
        <Route path="/advanced-technology" element={<AdvancedTechnology />} />
        <Route path="/gallery" element={<PlaceholderPage title="Smile Gallery" />} />
        <Route path="/testimonials" element={<PlaceholderPage title="Patient Testimonials" />} />
        <Route path="/faqs" element={<PlaceholderPage title="FAQs" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
      <FloatingCTA />
      <Footer />
    </>
  );
}

export default App;
