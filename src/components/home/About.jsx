'use client'

import { useState, useEffect } from 'react'
import { 
  Coffee, Award, Heart, MapPin, Phone, Mail, Clock, 
  Instagram, Facebook, Twitter, ArrowRight, Quote, 
  Star, ChevronLeft, ChevronRight 
} from 'lucide-react'
import './about.css'

// About Section Component
export function AboutSection({ onNavigate }) {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <p className="decorative-text">Notre Histoire</p>
          <div className="header-divider">
            <div className="divider-line"></div>
            <Coffee className="divider-icon" />
            <div className="divider-line"></div>
          </div>
          <h2 className="section-title">À propos de Lotus Coffee</h2>
          <p className="section-description-text">
            Lotus Coffee House allie savoir-faire artisanal et ambiance sereine,
            proposant des mélanges premium et un service d'exception pour une expérience inoubliable.
          </p>
        </div>

        <div className="about-content-grid">
          {/* Left Content */}
          <div className="about-left-content">
            <div className="content-block">
              <div className="content-decoration"></div>
              <div className="content-text">
                <h3 className="content-title">
                  Où la tradition rencontre l'innovation
                </h3>
                <p className="content-paragraph">
                  Lotus Coffee House réunit les méthodes traditionnelles de préparation du café
                  et les techniques modernes, créant une expérience unique qui célèbre
                  l'art du café sous toutes ses formes. Chaque tasse raconte une histoire de passion,
                  d'artisanat et de quête d'excellence.
                </p>
                <p className="content-paragraph">
                  Nos baristas experts sélectionnent des grains d'exception issus de plantations durables,
                  garantissant à chaque tasse des arômes riches qui éveillent les sens et réconfortent l'âme.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
              <div className="feature-card">
                <Award className="feature-icon" />
                <h4 className="feature-title">Qualité Premium</h4>
                <p className="feature-description">Parce que l'excellence n'est pas une option, mais une évidence.</p>
              </div>
              <div className="feature-card">
                <Heart className="feature-icon" />
                <h4 className="feature-title">Fait avec amour</h4>
                <p className="feature-description">Chaque tasse préparée avec passion et attention au détail</p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="about-right-images">
            <div className="images-grid">
              <div className="images-column">
                <img
                  src="https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455948/coffee_czydps.jpg"
                  alt="café"
                  className="image-large"
                  loading="lazy"
                />
                <img
                  src="https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760456581/lotus-terrace-view_etsyuy.png"
                  alt="Equipe"
                  className="image-small"
                  loading="lazy"
                />
              </div>
              <div className="images-column images-column-offset">
                <img
                  src="https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760456321/lotus-interior-night_f30zir.png"
                  alt="Intérieur du café"
                  className="image-small"
                  loading="lazy"
                />
                <img
                  src="https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455949/food_ntoqci.jpg"
                  alt="Nourriture"
                  className="image-large"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="decorative-element decorative-top-right"></div>
            <div className="decorative-element decorative-bottom-left"></div>
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
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455912/lotuserosebreakfast_o8ttzp.png",
    price: "18.5 DT",
    featured: true
  },
  {
    id: 2,
    title: "Le Fameux Royale",
    category: "Breakfast",
    description: "Premium breakfast for two with omelets, charcuterie, 6 mini cheese tartines with salmon and bacon, and choice of mini pancakes.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455905/fameuxroyale_puhwxc.png",
    price: "32.00 DT",
    featured: true
  },
  {
    id: 3,
    title: "Fast Gourmand",
    category: "Breakfast",
    description: "Perfect balanced breakfast with coffee, juice, water, pastry and a hearty omelette - excellent value and satisfaction.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455904/fastgourmand_xpbbja.png",
    price: "12.75 DT",
    featured: false
  },
  {
    id: 4,
    title: "Le Brunch Lotus",
    category: "Brunch",
    description: "Ultimate weekend brunch for two featuring pastries, cakes, mini desserts, pancakes, charcuterie, and savory brochettes - our signature sharing experience.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455906/lebrunchlotus_ronkes.png",
    price: "45 DT",
    featured: true
  },
  {
    id: 5,
    title: "Crêpe Lotus",
    category: "Crepes/Waffles",
    description: "Our signature dessert crepe with premium Lotus spread - the most indulgent and unique sweet creation on our menu.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455885/crepelotus_ryg7qp.jpg",
    price: "23 DT",
    featured: true
  },
  {
    id: 6,
    title: "Pancakes Lotus",
    category: "Crepes/Waffles",
    description: "Fluffy pancakes featuring our exclusive Lotus spread - a breakfast dessert masterpiece that defines our brand.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/v1760455906/Pancakelotus_dza6cj.jpg",
    price: "17 DT",
    featured: true
  },
  {
    id: 7,
    title: "Crêpe Nutella Banane Noisette",
    category: "Crepes/Waffles",
    description: "Classic crowd-pleaser with Nutella, fresh banana, and crunchy hazelnuts - perfectly executed every time.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/f_webp,q_auto,w_600/v1760455886/crepenutella_zsulme.webp",
    price: "16 DT",
    featured: false
  },
  {
    id: 8,
    title: "Thé Royal LOTUS",
    category: "Drinks",
    description: "Exclusive premium tea blend crafted specifically for Café Lotus - a unique and sophisticated beverage experience.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455911/theroyalelotus_iijq5q.png",
    price: "12 DT",
    featured: true
  },
  {
    id: 9,
    title: "Blue Lemon Citronnade",
    category: "Drinks",
    description: "Stunning visual masterpiece with fresh lemonade and blue curacao syrup - as beautiful as it is refreshing.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455888/bluelemon_apveeu.png",
    price: "9 DT",
    featured: true
  },
  {
    id: 10,
    title: "Power Detox",
    category: "Drinks",
    description: "Healthy energizing blend of apple, pineapple and cinnamon - the perfect wellness-oriented choice for health-conscious guests.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455912/powerdetox_l2kwmt.png",
    price: "12 DT",
    featured: false
  }
];
export function SpecialtiesSection({ onNavigate }) {
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
                    <p className="specialties-decorative">L’exception Lotus</p>
                    <div className="specialties-divider">
                        <div className="divider-line"></div>
                        <div className="divider-dot"></div>
                        <div className="divider-line"></div>
                    </div>
                    <h2 className="specialties-title">Les Pépites du Lotus</h2>
                    <h3 className="specialties-subtitle">Specialtiés</h3>
                    <p className="specialties-description">
                        Découvrez notre sélection soigneusement choisie de cafés de spécialité, chacun préparé avec des ingrédients premium et des techniques traditionnelles pour une expérience gustative extraordinaire.
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
                                    loading="lazy"
                                />
                                <div className="image-overlay" />

                                {/* Featured Badge */}
                                {item.featured && (
                                    <div className="featured-badge">
                                        Featured
                                    </div>
                                )}

                                
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
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
        <div className="ct-section">
          <div className="ct-wrapper">
            <button
              type="button"
              className="ct-button-menu"
              onClick={() => {
                if (onNavigate) onNavigate('menu')
                if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
              }}
            >
              Voir Menu Complet
              <ArrowRight className="ct-button-icon" />
            </button>
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
    rating: 5,
    text: "Déjeuner parfait ! Nourriture délicieuse et accueil chaleureux. Je recommande vivement !",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455896/customer5_rj2r4y.png"
  },
  {
    id: 2,
    name: "Samar Ben haj ali",
    rating: 5,
    text: "Un repas délicieux et un personnel aux petits soins. À ne pas manquer !",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455894/customer2_rxx3ht.png"
  },
  {
    id: 3,
    name: "Ameur ZAMMOURI",
    rating: 4,
    text: "Nourriture savoureuse, service impeccable. Je reviendrai sans hésiter !",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455888/customer_nxbn4a.png"
  },
  {
    id: 4,
    name: "Helmi Chihaoui",
    rating: 5,
    text: "Espace cosy et lumineux, idéal pour les sessions de révision.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455894/customer3_kboqb2.png"
  },
  {
    id: 5,
    name: "Mohamed Amine",
    rating: 5,
    text: "Un intérieur apaisant où l’inspiration vient naturellement.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455895/customer4_psr83g.png"
  },
  {
    id: 6,
    name: "Wissem Sahli",
    rating: 4,
    text: "L’endroit parfait pour respirer, réfléchir et savourer un bon café.",
    image: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455897/customer6_a6cwza.png"
  }
]

export function TestimonialsSection({ onNavigate }) {
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
          <p className="testimonials-decorative">Les avis de nos clients</p>
          <div className="testimonials-divider">
            <div className="divider-line"></div>
            <Quote className="divider-icon" />
            <div className="divider-line"></div>
          </div>
          <h2 className="testimonials-title">
            Témoignages
          </h2>
          <p className="testimonials-description">
            Découvrez les avis de nos clients sur leur expérience au Lotus Coffee House.
            Chaque commentaire nous inspire à continuer d’offrir un café et un service d’exception.
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
                src={testimonials[currentTestimonial].image }
                
                alt={testimonials[currentTestimonial].name}
                className="customer-image"
                loading="lazy"
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
            <div className="stat-number">4.3★</div>
            <p className="stat-label">Note moyenne</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <p className="stat-label">clients Heureux</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <p className="stat-label">Satisfaction des clients</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <p className="stat-label">assistance client</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="ct-container">
          <h3 className="ct-title">
            Découvrez l'expérience de Lotus dès maintenant !
          </h3>
          <button
            type="button"
            className="ct-button"
            onClick={() => {
              if (onNavigate) onNavigate('contact')
              if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
            }}
          >
            Envoyez-nous un message
          </button>
        </div>
      </div>
    </section>
  )
}