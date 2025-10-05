'use client'

import { useState, useEffect } from 'react'
import { 
  Coffee, Award, Heart, MapPin, Phone, Mail, Clock, 
  Instagram, Facebook, Twitter, ArrowRight, Quote, 
  Star, ChevronLeft, ChevronRight 
} from 'lucide-react'
import './about.css'

// About Section Component
export function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <p className="decorative-text">Our Story</p>
          <div className="header-divider">
            <div className="divider-line"></div>
            <Coffee className="divider-icon" />
            <div className="divider-line"></div>
          </div>
          <h2 className="section-title">About Lotus Coffee</h2>
          <p className="section-description">
            Lotus Coffee House combines artisan coffee expertise with a serene atmosphere,
            offering premium blends and exceptional service for an unforgettable experience.
          </p>
        </div>

        <div className="about-content-grid">
          {/* Left Content */}
          <div className="about-left-content">
            <div className="content-block">
              <div className="content-decoration"></div>
              <div className="content-text">
                <h3 className="content-title">
                  Where tradition meets innovation
                </h3>
                <p className="content-paragraph">
                  The Lotus Coffee House brings together traditional coffee brewing methods
                  with modern techniques, creating a unique experience that celebrates the
                  art of coffee in all its forms. Each cup tells a story of passion,
                  craftsmanship, and dedication to excellence.
                </p>
                <p className="content-paragraph">
                  Our expert baristas source premium beans from sustainable farms worldwide,
                  ensuring every cup delivers rich flavors and aromatic bliss that awakens
                  the senses and nourishes the soul.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
              <div className="feature-card">
                <Award className="feature-icon" />
                <h4 className="feature-title">Premium Quality</h4>
                <p className="feature-description">Hand-selected beans from the world's finest coffee regions</p>
              </div>
              <div className="feature-card">
                <Heart className="feature-icon" />
                <h4 className="feature-title">Made with Love</h4>
                <p className="feature-description">Every cup crafted with passion and attention to detail</p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="about-right-images">
            <div className="images-grid">
              <div className="images-column">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/3qWuZGoVrpnHkS25FJJViM.jpg"
                  alt="Coffee preparation"
                  className="image-large"
                />
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
                  alt="Coffee beans"
                  className="image-small"
                />
              </div>
              <div className="images-column images-column-offset">
                <img
                  src="https://sensoryzero.coffee/cdn/shop/files/s0ChocolatyBlendCoffeeBean1kg.jpg?v=1724913972&width=1445"
                  alt="Coffee package"
                  className="image-small"
                />
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop"
                  alt="Coffee shop interior"
                  className="image-large"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="decorative-element decorative-top-right"></div>
            <div className="decorative-element decorative-bottom-left"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <p className="stat-label">Coffee Origins</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <p className="stat-label">Specialty Drinks</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">5★</div>
            <p className="stat-label">Customer Rating</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <p className="stat-label">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Specialties Section Component
const specialties = [
  {
    id: 1,
    title: "Lotus Rose Breakfast",
    category: "Breakfast",
    description: "Signature breakfast with tartines, scrambled eggs, 3 mini Nutella pancakes, and French toast with honey - the ultimate Lotus morning experience.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$18.50",
    featured: true
  },
  {
    id: 2,
    title: "Le Fameux Royale",
    category: "Breakfast",
    description: "Premium breakfast for two with omelets, charcuterie, 6 mini cheese tartines with salmon and bacon, and choice of mini pancakes.",
    image: "https://images.unsplash.com/photo-1551782455-6a27c1c99452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$32.00",
    featured: true
  },
  {
    id: 3,
    title: "Fast Gourmand",
    category: "Breakfast",
    description: "Perfect balanced breakfast with coffee, juice, water, pastry and a hearty omelette - excellent value and satisfaction.",
    image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$12.75",
    featured: false
  },
  {
    id: 4,
    title: "Le Brunch Lotus",
    category: "Brunch",
    description: "Ultimate weekend brunch for two featuring pastries, cakes, mini desserts, pancakes, charcuterie, and savory brochettes - our signature sharing experience.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$45.00",
    featured: true
  },
  {
    id: 5,
    title: "Crêpe Lotus",
    category: "Crepes/Waffles",
    description: "Our signature dessert crepe with premium Lotus spread - the most indulgent and unique sweet creation on our menu.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$23.00",
    featured: true
  },
  {
    id: 6,
    title: "Pancakes Lotus",
    category: "Crepes/Waffles",
    description: "Fluffy pancakes featuring our exclusive Lotus spread - a breakfast dessert masterpiece that defines our brand.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$17.00",
    featured: true
  },
  {
    id: 7,
    title: "Crêpe Nutella Banane Noisette",
    category: "Crepes/Waffles",
    description: "Classic crowd-pleaser with Nutella, fresh banana, and crunchy hazelnuts - perfectly executed every time.",
    image: "https://images.unsplash.com/photo-1551782455-6a27c1c99452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$16.00",
    featured: false
  },
  {
    id: 8,
    title: "Thé Royal LOTUS",
    category: "Drinks",
    description: "Exclusive premium tea blend crafted specifically for Café Lotus - a unique and sophisticated beverage experience.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$12.00",
    featured: true
  },
  {
    id: 9,
    title: "Blue Lemon Citronnade",
    category: "Drinks",
    description: "Stunning visual masterpiece with fresh lemonade and blue curacao syrup - as beautiful as it is refreshing.",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$9.50",
    featured: true
  },
  {
    id: 10,
    title: "Power Detox",
    category: "Drinks",
    description: "Healthy energizing blend of apple, pineapple and cinnamon - the perfect wellness-oriented choice for health-conscious guests.",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: "$12.00",
    featured: false
  }
];
export function SpecialtiesSection() {
    const [selectedCategory, setSelectedCategory] = useState('Breakfast')
    const categories = ['Breakfast', 'Brunch', 'Drinks', 'Crepes/Waffles']

    // You may want to update the specialties array above to match these categories.
    const filteredSpecialties = specialties.filter(
        item => item.category === selectedCategory
    )

    return (
        <section id="specialties" className="specialties-section">
            <div className="specialties-container">
                {/* Section Header */}
                <div className="specialties-header">
                    <p className="specialties-decorative">What makes us special</p>
                    <div className="specialties-divider">
                        <div className="divider-line"></div>
                        <div className="divider-dot"></div>
                        <div className="divider-line"></div>
                    </div>
                    <h2 className="specialties-title">Our Signature</h2>
                    <h3 className="specialties-subtitle">Specialties</h3>
                    <p className="specialties-description">
                        Discover our carefully curated selection of specialty coffees, each crafted with
                        premium ingredients and traditional techniques for an extraordinary taste experience.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`filter-button ${selectedCategory === category ? 'filter-button-active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Specialties Grid */}
                <div className="specialties-grid">
                    {filteredSpecialties.map((item, index) => (
                        <div
                            key={item.id}
                            className={`specialty-card ${item.featured ? 'featured-card' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image Container */}
                            <div className="card-image-container">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-image"
                                />
                                <div className="image-overlay" />

                                {/* Featured Badge */}
                                {item.featured && (
                                    <div className="featured-badge">
                                        Featured
                                    </div>
                                )}

                                {/* Hover Content */}
                                <div className="hover-content">
                                    <button className="hover-button">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="card-content">
                                <div className="card-header">
                                    <span className="card-category">{item.category}</span>
                                    <span className="card-price">{item.price}</span>
                                </div>

                                <h3 className="card-title">
                                    {item.title}
                                </h3>

                                <p className="card-description">
                                    {item.description}
                                </p>

                                <div className="card-ct">
                                    <span className="ct-text">Order Now</span>
                                    <ArrowRight className="ct-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="ct-section">
                    <div className="ct-wrapper">
                        <a
                            href="#menu"
                            className="ct-button"
                        >
                            View Full Menu
                            <ArrowRight className="ct-button-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Testimonials Section Component
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Coffee Enthusiast",
    rating: 5,
    text: "Lotus Coffee House is my sanctuary. The ambiance is perfect for both work and relaxation, and their signature latte is simply divine. The baristas truly know their craft.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1b3?w=150&h=150&fit=crop&crop=faces&auto=format"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Local Business Owner",
    rating: 5,
    text: "I've tried coffee shops around the world, but Lotus stands out. Their attention to detail in every cup and the warm, welcoming atmosphere make it my go-to meeting spot.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Food Blogger",
    rating: 5,
    text: "The pour-over experience at Lotus is unmatched. Each cup tells a story, and the staff's knowledge about coffee origins and brewing methods is impressive. A true gem!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    role: "University Student",
    rating: 5,
    text: "Perfect study spot with amazing coffee. The WiFi is reliable, the environment is peaceful, and their cold brew keeps me energized throughout my study sessions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Isabella Martinez",
    role: "Artist",
    rating: 5,
    text: "Lotus inspires creativity. The beautiful interior design and exceptional coffee create the perfect atmosphere for my art. Their seasonal specials are always delightful surprises.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Robert Johnson",
    role: "Coffee Connoisseur",
    rating: 5,
    text: "Finally found a place that respects coffee as much as I do. The single-origin selections are exceptional, and the brewing methods showcase each bean's unique character.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="reviews" className="testimonials-section">
      {/* Background Pattern */}
      <div className="testimonials-pattern"></div>

      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <p className="testimonials-decorative">What our customers say</p>
          <div className="testimonials-divider">
            <div className="divider-line"></div>
            <Quote className="divider-icon" />
            <div className="divider-line"></div>
          </div>
          <h2 className="testimonials-title">
            Customer Reviews
          </h2>
          <p className="testimonials-description">
            Hear from our valued customers about their experiences at Lotus Coffee House.
            Every review inspires us to continue delivering exceptional coffee and service.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="carousel-container">
          <div className="testimonial-card">
            {/* Rating */}
            <div className="rating-stars">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="star-icon" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="testimonial-quote">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Customer Info */}
            <div className="customer-info">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="customer-image"
              />
              <div className="customer-details">
                <h4 className="customer-name">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="customer-role">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="nav-button nav-button-prev"
          >
            <ChevronLeft className="nav-icon" />
          </button>

          <button
            onClick={nextTestimonial}
            className="nav-button nav-button-next"
          >
            <ChevronRight className="nav-icon" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="indicators-container">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`indicator ${index === currentTestimonial ? 'indicator-active' : ''}`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">4.9★</div>
            <p className="stat-label">Average Rating</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <p className="stat-label">Happy Reviews</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <p className="stat-label">Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <p className="stat-label">Customer Support</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="ct-container">
          <h3 className="ct-title">
            Ready to create your own coffee story?
          </h3>
          <a
            href="#contact"
            className="ct-button"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  )
}