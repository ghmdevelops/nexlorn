import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import CookieConsent from '../CookieConsent/CookieConsent.jsx';
import ShareButton from '../ShareButton/ShareButton.jsx';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton.jsx';

function Layout({ children, contactHref }) {
  return (
    <div className="app">
      <Navbar contactHref={contactHref} />
      <main>{children}</main>
      <Footer />
      <ShareButton />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default Layout;
