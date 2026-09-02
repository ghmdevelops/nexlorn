import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import WhyUs from './components/WhyUs/WhyUs.jsx';
import Process from './components/Process/Process.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import CTA from './components/CTA/CTA.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import CookieConsent from './components/CookieConsent/CookieConsent.jsx';
import ShareButton from './components/ShareButton/ShareButton.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ShareButton />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;

