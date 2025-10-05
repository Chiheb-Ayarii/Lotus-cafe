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
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.date) {
      newErrors.date = "Date is required"
      isValid = false
    }

    if (!formData.time) {
      newErrors.time = "Time is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleWhatsAppReservation = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    const message = `Hello! I would like to make a reservation at Lotus Coffee House:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}
${formData.specialRequests ? `Special Requests: ${formData.specialRequests}` : ''}

Please confirm my reservation. Thank you!`

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
    
    const subject = `Reservation Request - ${formData.name}`
    const body = `Dear Lotus Coffee House,

I would like to make a reservation with the following details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}
${formData.specialRequests ? `Special Requests: ${formData.specialRequests}` : ''}

Please confirm my reservation at your earliest convenience.

Thank you,
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
          <p className="reservation-decorative">Book Your Table</p>
          <div className="reservation-divider">
            <div className="divider-line"></div>
            <Calendar className="divider-icon" />
            <div className="divider-line"></div>
          </div>
          <h2 className="reservation-title">
            Make a Reservation
          </h2>
          <p className="reservation-description">
            Secure your spot at Lotus Coffee House. Whether it's for a quiet coffee break, 
            business meeting, or casual gathering, we'll ensure you have the perfect experience.
          </p>
        </div>

        <div className="reservation-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info-side">
            <h3 className="contact-title">Why Reserve With Us?</h3>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <CheckCircle />
                </div>
                <div className="benefit-content">
                  <h4>Guaranteed Seating</h4>
                  <p>Your table will be waiting, no matter how busy we get</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Clock />
                </div>
                <div className="benefit-content">
                  <h4>Priority Service</h4>
                  <p>Faster service and dedicated attention for reservations</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Users />
                </div>
                <div className="benefit-content">
                  <h4>Group Friendly</h4>
                  <p>Perfect for groups, meetings, and special occasions</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Calendar />
                </div>
                <div className="benefit-content">
                  <h4>Flexible Booking</h4>
                  <p>Easy online booking with instant confirmation</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <h4 className="contact-subtitle">Need Help?</h4>
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
              <h4 className="policy-title">Reservation Policy</h4>
              <ul className="policy-list">
                <li>Reservations held for 15 minutes past booking time</li>
                <li>Groups of 6+ require 24 hours notice for cancellation</li>
                <li>Special requests subject to availability</li>
                <li>Contact us for events larger than 8 people</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Reservation Form */}
          <div className="reservation-form-side">
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle className="success-icon" />
                <h3>Reservation Confirmed!</h3>
                <p>Thank you, {formData.name}. Your table for {formData.guests} on {formData.date} at {formData.time} has been reserved.</p>
                <p className="success-note">We've sent a confirmation to {formData.email}</p>
              </div>
            ) : (
              <form className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
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
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`form-input ${errors.time ? 'error' : ''}`}
                    >
                      <option value="">Select time</option>
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
                      Number of Guests *
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
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Any special requirements, allergies, or occasion details..."
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
                        Processing...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="button-icon" />
                        Reserve via WhatsApp
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
                        Processing...
                      </>
                    ) : (
                      <>
                        <Mail className="button-icon" />
                        Reserve via Email
                      </>
                    )}
                  </button>
                </div>

                <p className="form-note">
                  * Required fields. We'll contact you to confirm your reservation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}