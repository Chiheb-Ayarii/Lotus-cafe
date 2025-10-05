import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
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
              Where exceptional coffee meets tranquil ambiance. Experience the art of coffee
              crafted with passion and served with love.
            </p>

            <div className="social-links">
              <a href="#" className="social-link">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <ul className="link-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a href={link.href} className="footer-link">
                    <Coffee size={14} className="link-icon" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Items */}
          <div className="footer-section">
            <h4 className="section-title">Our Signatures</h4>
            <ul className="link-list">
              {signatureItems.map((item, index) => (
                <li key={index} className="link-item">
                  <a href={item.href} className="footer-link">
                    <Coffee size={14} className="link-icon" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="section-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <div className="contact-text">
                  <p>123 Coffee Street</p>
                  <p>Downtown District</p>
                  <p>City, State 12345</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={16} className="contact-icon" />
                <span className="contact-text">+1 (555) 123-4567</span>
              </div>

              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span className="contact-text">hello@lotuscoffee.com</span>
              </div>
            </div>

            {/* Hours */}
            <div className="hours-section">
              <h5 className="hours-title">Opening Hours</h5>
              <div className="hours-text">
                <p>Mon-Fri: 6:30 AM - 10:00 PM</p>
                <p>Sat-Sun: 7:00 AM - 11:00 PM</p>
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
              <p>© 2024 Lotus Coffee House. All rights reserved.</p>
            </div>

            <div className="footer-links">
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms of Service
              </a>
              <a href="#" className="footer-bottom-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}