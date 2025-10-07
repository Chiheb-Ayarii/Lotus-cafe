'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle, MessageCircle } from 'lucide-react'
import './reservation.css'

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      })
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      date: '',
      time: ''
    }

    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide"
      isValid = false
    }

    if (!formData.date) {
      newErrors.date = "La date est requise"
      isValid = false
    }

    if (!formData.time) {
      newErrors.time = "L'heure est requise"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleWhatsAppReservation = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    const message = `Bonjour ! Je souhaite faire une réservation au Lotus Coffee House :
    
Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Date : ${formData.date}
Heure : ${formData.time}
Nombre de personnes : ${formData.guests}
${formData.specialRequests ? `Demandes spéciales : ${formData.specialRequests}` : ''}

Merci de confirmer ma réservation.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/15551234567?text=${encodedMessage}`
    
    // Simulate processing delay
    setTimeout(() => {
      setIsSubmitting(false)
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  const handleEmailReservation = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    const subject = `Demande de réservation - ${formData.name}`
    const body = `Bonjour Lotus Coffee House,

Je souhaite faire une réservation avec les informations suivantes :

Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Date : ${formData.date}
Heure : ${formData.time}
Nombre de personnes : ${formData.guests}
${formData.specialRequests ? `Demandes spéciales : ${formData.specialRequests}` : ''}

Veuillez confirmer ma réservation dès que possible.

Merci,
${formData.name}`

    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    const mailtoUrl = `mailto:founder@lotuscoffee.com?subject=${encodedSubject}&body=${encodedBody}`
    
    // Simulate processing delay
    setTimeout(() => {
      setIsSubmitting(false)
      window.location.href = mailtoUrl
    }, 1000)
  }

  // Check if all required fields are filled
  const areRequiredFieldsFilled = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.date && 
           formData.time
  }

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
  ]

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+']

  return (
    <section id="reservations" className="reservation-section">
      <div className="reservation-container">
        {/* Section Header */}
        <div className="reservation-header">
          <p className="reservation-decorative">Réservez votre table</p>
          <div className="reservation-divider">
            <div className="divider-line"></div>
            <Calendar className="divider-icon" />
            <div className="divider-line"></div>
          </div>
          <h2 className="reservation-title">
            Réserver une table
          </h2>
          <p className="reservation-description">
            Assurez votre place au Lotus Café. Que ce soit pour une pause café tranquille,
            une réunion d'affaires ou un rassemblement convivial, nous vous garantissons une expérience parfaite.
          </p>
        </div>

        <div className="reservation-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info-side">
            <h3 className="contact-title">Pourquoi réserver chez nous ?</h3>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CheckCircle />
                </div>
                <div className="benefit-content">
                  <h4>Siège garanti</h4>
                  <p>Votre table vous attendra, même lors des périodes d'affluence</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Clock />
                </div>
                <div className="benefit-content">
                  <h4>Service prioritaire</h4>
                  <p>Service plus rapide et attention dédiée pour les réservations</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Users />
                </div>
                <div className="benefit-content">
                  <h4>Adapté aux groupes</h4>
                  <p>Parfait pour les groupes, les réunions et les occasions spéciales</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Calendar />
                </div>
                <div className="benefit-content">
                  <h4>Réservation flexible</h4>
                  <p>Réservation en ligne facile avec confirmation instantanée</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <h4 className="contact-subtitle">Besoin d'aide ?</h4>
              <div className="contact-methods">
                <div className="contact-method">
                  <Phone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-method">
                  <Mail className="contact-icon" />
                  <span>reservations@lotuscoffee.com</span>
                </div>
                <div className="contact-method">
                  <MapPin className="contact-icon" />
                  <span>123 Coffee Street, Downtown</span>
                </div>
              </div>
            </div>

            <div className="reservation-policy">
              <h4 className="policy-title">Politique de réservation</h4>
              <ul className="policy-list">
                <li>Les réservations sont maintenues 15 minutes après l'heure de réservation</li>
                <li>Les groupes de 6+ nécessitent un préavis de 24 heures pour l'annulation</li>
                <li>Les demandes spéciales sont soumises à disponibilité</li>
                <li>Contactez-nous pour des événements de plus de 8 personnes</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Reservation Form */}
          <div className="reservation-form-side">
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" />
                <h3>Réservation confirmée !</h3>
                <p>Merci, {formData.name}. Votre table pour {formData.guests} le {formData.date} à {formData.time} a été réservée.</p>
                <p className="success-note">Nous avons envoyé une confirmation à {formData.email}</p>
              </div>
            ) : (
              <form className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Entrez votre nom complet"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      <Calendar className="label-icon" />
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`form-input ${errors.date ? 'error' : ''}`}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && <span className="error-message">{errors.date}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="time" className="form-label">
                      <Clock className="label-icon" />
                      Heure *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`form-input ${errors.time ? 'error' : ''}`}
                    >
                      <option value="">Sélectionner l'heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && <span className="error-message">{errors.time}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests" className="form-label">
                      <Users className="label-icon" />
                      Nombre de personnes *
                    </label>
                    <div className="guest-buttons">
                      {guestOptions.map(guest => (
                        <button
                          key={guest}
                          type="button"
                          className={`guest-button ${formData.guests === guest ? 'guest-button-active' : ''}`}
                          onClick={() => setFormData({...formData, guests: guest})}
                        >
                          {guest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests" className="form-label">
                    Demandes spéciales
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Toutes exigences particulières, allergies ou détails de l'occasion..."
                    rows={4}
                  />
                </div>

                <div className="reservation-buttons">
                  <button
                    type="button"
                    onClick={handleWhatsAppReservation}
                    disabled={isSubmitting || !areRequiredFieldsFilled()}
                    className={`whatsapp-btn ${isSubmitting ? 'submitting' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Traitement...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="button-icon" />
                        Réserver via WhatsApp
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailReservation}
                    disabled={isSubmitting || !areRequiredFieldsFilled()}
                    className={`email-btn ${isSubmitting ? 'submitting' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Traitement...
                      </>
                    ) : (
                      <>
                        <Mail className="button-icon" />
                        Réserver par e-mail
                      </>
                    )}
                  </button>
                </div>

                <p className="form-note">
                  * Champs obligatoires. Nous vous contacterons pour confirmer votre réservation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}