"use client"

import { useState, useEffect, useRef } from "react"
import "./contact.css"

export default function LotusContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const formRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (formRef.current) observer.observe(formRef.current)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="lotus-contact">
      <div className="contact-hero">
        <p className="contact-subtitle">Restons en contact</p>
        <div className="title-decoration">
          <span className="decoration-line"></span>
          <h1 className="contact-title">CONTACTEZ LE LOTUS CAFÉ</h1>
          <span className="decoration-line"></span>
        </div>
      </div>

      <div className="contact-content" ref={formRef}>
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              ENVOYER
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <h3 className="info-title">CAFÉ LOTUS TUNIS</h3>
          <div className="info-details">
            <p className="info-address">123 Avenue Habib Bourguiba</p>
            <p className="info-address">Tunis 1000, Tunisie</p>
            <p className="info-phone">+216 71 123 456</p>
            <p className="info-email">contact@lotuscafe.com</p>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.50123456789!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd331d84c6d3c3%3A0x247e789637a290d3!2sLotus%20Caf%C3%A9!5e0!3m2!1sen!2stn!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
