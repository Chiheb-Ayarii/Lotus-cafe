"use client"

import { useEffect, useRef } from "react"
import "./lotusabout.css"

export default function LotusAbout({ onNavigate }) {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="lotus-about">
      {/* heroabout Section */}
      <section className="heroabout-section" ref={addToRefs}>
        <div className="heroabout-content">
          <h1 className="heroabout-title">
            Lotus
            <br />
            Soukra
          </h1>
          <p className="heroabout-subtitle">À PROPOS DE NOUS</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section lotusabout" ref={addToRefs}>
        <div className="section-container">
          <div className="intro-content">
            <p className="section-tagline">Un lieu où la communauté rencontre la saveur</p>
            <h2 className="section-title">
              <span className="decorative-line">~</span>À PROPOS
              <br />
              DU LOTUS CAFÉ
              <span className="decorative-line">~</span>
            </h2>
            <div className="lotus-pattern">
              <svg viewBox="0 0 200 200" className="pattern-svg">
                <g transform="translate(100,100)">
                  {[...Array(12)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 30})`}>
                      <path
                        d="M 0,-60 Q 15,-45 0,-30 Q -15,-45 0,-60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </g>
                  ))}
                  <circle cx="0" cy="0" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
            <div className="intro-text">
              <p>
                Au Lotus, nous sommes plus qu'un simple café: nous sommes un lieu de rencontre pour les amis, les
                familles et les amateurs de café. Nous servons des ingrédients frais et locaux dans chaque plat et nous
                sommes fiers d'offrir une atmosphère sereine et un menu qui rassemble les gens.
              </p>
              <p>
                Que vous soyez ici pour un café rapide ou un repas tranquille, le Lotus est l'endroit où les moments se
                créent.
              </p>
              <p>
                Au Lotus, nous nous efforçons de créer une expérience culinaire mémorable à chaque visite, en proposant
                une variété de plats qui répondent à tous les goûts tout en assurant un service exceptionnel dans un
                environnement chaleureux et accueillant.
              </p>
            </div>
          </div>
          <div className="intro-image">
            <img src="/lotus-coffee-latte-art.webp" alt="Lotus Coffee" />
          </div>
        </div>
      </section>

      {/* Prestige Section */}
      <section className="prestige-section lotusabout" ref={addToRefs}>
        <div className="section-container reverse">
          <div className="section-text">
            <p className="section-tagline">Cuisine, vues et service</p>
            <h2 className="section-title">
              <span className="decorative-line">~</span>
              PRESTIGE
              <span className="decorative-line">~</span>
            </h2>
            <p className="section-description">
              Le Lotus se distingue par sa cuisine exquise, mariant parfaitement les saveurs pour créer un délice
              culinaire, et son ambiance zen offre une atmosphère paisible et rafraîchissante. Associé à un service
              impeccable et à une décoration inspirée de la nature, il offre une expérience inégalée qui définit
              l'élégance et la sérénité.
            </p>
            <button className="cta-button"
             onClick={() => {
                if (onNavigate) onNavigate('menu')
                if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
              }}>NOTRE MENU</button>
          </div>
          <div className="section-image">
            <img src="/lotus-cafe-exterior.webp" alt="Lotus Café Exterior" />
          </div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="distinction-section lotusabout" ref={addToRefs}>
        <div className="section-container">

          <div className="section-text">
            <p className="section-tagline">Un café luxueux de renommée internationale</p>
            <h2 className="section-title">
              <span className="decorative-line">~</span>
              DISTINCTION
              <span className="decorative-line">~</span>
            </h2>
            <p className="section-description">
              Le Lotus Café est largement reconnu comme l'un des meilleurs cafés de la région, un lieu où cuisine
              exquise, service impeccable et ambiance zen se marient harmonieusement. Situé dans un cadre naturel
              apaisant, il offre une expérience culinaire unique qui séduit aussi bien les locaux que les visiteurs
              internationaux. Avec sa réputation exceptionnelle, Le Lotus Café est une destination incontournable pour
              tous ceux qui recherchent une expérience gastronomique mémorable, agrémentée d'un accueil chaleureux et
              d'un service élégant.
            </p>
          </div>
          <div className="section-image">
            <img src="/lotus-interior-garden.webp" alt="Lotus Interior Garden" />
          </div>
        </div>
      </section>

      {/* Elegance Section */}
      <section className="elegance-section lotusabout" ref={addToRefs}>
        <div className="section-container reverse">
          <div className="section-text">
            <p className="section-tagline">Là où l'élégance rencontre la reconnaissance mondiale</p>
            <h2 className="section-title">
              <span className="decorative-line">~</span>
              ÉLÉGANCE
              <span className="decorative-line">~</span>
            </h2>
            <p className="section-description">
              L'élégante terrasse du Lotus Café offre une expérience unique avec une ambiance zen et naturelle, ce qui
              en fait une destination unique en son genre. Connu pour sa sophistication inégalée, le Lotus Café surpasse
              tous les autres cafés de la région.
            </p>
            <p className="section-description">
              Accueillant aussi bien les locaux que les visiteurs internationaux, il est célébré dans le monde entier
              comme un café de premier ordre qui allie élégance, exclusivité et ambiance exceptionnelle.
            </p>
          </div>
          <div className="section-image">
            <img src="/lotus-terrace-view.webp" alt="Lotus Terrace" />
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="excellence-section lotusabout" ref={addToRefs}>
        <div className="section-container">
          
          <div className="section-text">
            <p className="section-tagline">
              Une cuisine luxueuse, un service exceptionnel et une renommée internationale
            </p>
            <h2 className="section-title">
              <span className="decorative-line">~</span>
              EXCELLENCE
              <span className="decorative-line">~</span>
            </h2>
            <p className="section-description">
              Le Lotus Café redéfinit l'excellence du café-resto avec une cuisine exquise et des saveurs riches et
              incomparables. Des plats artisanaux aux boissons signatures, leur dévouement à la qualité transparaît.
            </p>
            <p className="section-description">
              Leur personnel accueillant et impeccablement formé offre un service élégant, créant une expérience
              luxueuse reconnue localement et internationalement.
            </p>
          </div>
          <div className="section-image">
            <img src="/lotus-interior-night.webp" alt="Lotus Interior Night" />
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="visit-section lotusabout" ref={addToRefs}>
        <div className="visit-content">
          <h2 className="visit-title">
            The
            <br />
            Lotus
          </h2>
          <p className="visit-tagline">Planning your visit</p>
          <h3 className="visit-heading">VISITEZ-NOUS</h3>
          <p className="visit-description">
            Découvrez où se situe Le Lotus, niché dans un cadre paisible. Accédez facilement à notre emplacement grâce à
            Google Maps et planifiez votre prochaine visite. Que ce soit pour un repas exceptionnel, un café savoureux
            ou un moment de détente, laissez-vous guider vers une expérience unique et inoubliable au Lotus.
          </p>
          <button 
  className="cta-button"
  onClick={() => window.open('https://www.google.com/maps/place/Lotus+Caf%C3%A9/data=!4m2!3m1!1s0x0:0x247e789637a290d3?sa=X&ved=1t:2428&ictx=111', '_blank')}
>
  VOIR SUR GOOGLE MAPS
</button>
        </div>
      </section>
    </div>
  )
}