import { Coffee, Instagram, Facebook, Twitter,Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

// wait for an element to appear in the DOM, then call callback
function waitForElement(selector, timeout = 1000) {
  return new Promise((resolve) => {
    const start = Date.now()
    const check = () => {
      const el = document.querySelector(selector)
      if (el) return resolve(el)
      if (Date.now() - start > timeout) return resolve(null)
      requestAnimationFrame(check)
    }
    check()
  })
}

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ]

  const signatureItems = [
    { name: 'Lotus Rose Breakfast', href: '#specialties' },
    { name: 'Le Fameux Royale', href: '#specialties' },
    { name: 'Crêpe Lotus', href: '#specialties' },
    { name: 'Thé Royal LOTUS', href: '#specialties' },
    { name: 'Le Brunch Lotus', href: '#specialties' }
  ]

  return (
    <footer className="footer">
      {/* helper to navigate to home then scroll to an anchor when element is available */}
      {/* placed here so it can capture onNavigate from props */}
      {
        /* eslint-disable no-unused-vars */
      }
      <script type="text/javascript" dangerouslySetInnerHTML={{__html: ''}} />
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <span className="logo-text">L</span>
              </div>
              <div className="brand-text">
                <h3 className="brand-title">Lotus</h3>
                <p className="brand-subtitle">Coffee House</p>
              </div>
            </div>

            <p className="brand-description">
              Où une cuisine savoureuse rencontre un café d'exception, 
              le tout dans une ambiance paisible. 
              Découvrez l'art de la table et du café, élaborés avec passion et servis avec bienveillance. 
            </p>

            <div className="social-links">
              <a href="https://www.instagram.com/lotus_soukra/?hl=en" className="social-link" target='_blank'>
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/p/LOTUS-soukra-61565204855190/" className="social-link" target='_blank'>
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@lotus_soukra" className="social-link" target='_blank'>
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Accès rapide</h4>
            <ul className="link-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <button
                    style={{ backgroundColor: 'transparent', border: 'none', borderRadius: 0, padding: 0, boxShadow: 'none' }}
                    type="button"
                    className="footer-link"
                    onClick={() => {
                      // map known anchors to page navigation or in-page scroll
                      if (link.href === '#menu') {
                        if (onNavigate) onNavigate('menu')
                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else if (link.href === '#about') {
                        if (onNavigate) onNavigate('about')
                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else if (link.href === '#contact') {
                        if (onNavigate) onNavigate('contact')
                        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else {
                        // default: navigate to home and scroll to the id when present
                        if (onNavigate) onNavigate('home')
                        if (typeof document !== 'undefined') {
                          waitForElement(link.href).then((el) => {
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                          })
                        }
                      }
                    }}
                  >
                    <Coffee size={14} className="link-icon" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Items */}
          <div className="footer-section">
            <h4 className="section-title">Nos Spécialités</h4>
            <ul className="link-list">
              {signatureItems.map((item, index) => (
                <li key={index} className="link-item">
                  <button
                    style={{ backgroundColor: 'transparent', border: 'none', borderRadius: 0, padding: 0, boxShadow: 'none' }}
                    type="button"
                    className="footer-link"
                    onClick={() => {
                      if (onNavigate) onNavigate('home')
                      if (typeof document !== 'undefined') {
                        waitForElement(item.href).then((el) => {
                          if (el) el.scrollIntoView({ behavior: 'smooth' })
                        })
                      }
                    }}
                  >
                    <Coffee size={14} className="link-icon" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">Infos de contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <div className="contact-text">
                  <p> Résidence Soukra City</p>
                  <p> Avenue de l'U.M.A</p>
                  <p>Tunis, Ariana</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span className="contact-text">+216 26 069 268</span>
              </div>

              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span className="contact-text">hello@lotuscoffee.com</span>
              </div>
            </div>

            {/* Hours */}
            <div className="hours-section">
              <h5 className="hours-title">Nos horaires</h5>
              <div className="hours-text">
                <p>Lundi-Vendredi : 6h30 - minuit</p>
                <p>Samedi-Dimanche : 7h00 - minuit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© 2026 Lotus Coffee House. All rights reserved.</p>
            </div>

            <div className="footer-links">
              <span href="#" className="footer-bottom-link">
                Privacy Policy
              </span>
              <span href="#" className="footer-bottom-link">
                Terms of Service
              </span>
              <span href="#" className="footer-bottom-link">
                Cookie Policy
              </span>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}