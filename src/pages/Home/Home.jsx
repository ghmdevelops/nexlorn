import Hero from '../../components/Hero/Hero.jsx';
import TechStack from '../../components/TechStack/TechStack.jsx';
import StartHere from '../../components/StartHere/StartHere.jsx';
import Services from '../../components/Services/Services.jsx';
import About from '../../components/About/About.jsx';
import WhyUs from '../../components/WhyUs/WhyUs.jsx';
import Process from '../../components/Process/Process.jsx';
import Cases from '../../components/Cases/Cases.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import FAQ from '../../components/FAQ/FAQ.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import Contact from '../../components/Contact/Contact.jsx';

function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <StartHere />
      <Services />
      <About />
      <WhyUs />
      <Process />
      <Cases />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}

export default Home;
