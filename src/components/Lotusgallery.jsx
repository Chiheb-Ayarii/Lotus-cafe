"use client"

import { useEffect, useRef } from "react"
import "./lotusgallery.css"

export default function Lotusgallery() {
  const imagesRef = useRef([])

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

    imagesRef.current.forEach((img) => {
      if (img) observer.observe(img)
    })

    return () => observer.disconnect()
  }, [])

const galleryImages = [
    { src: "/src/assets/gallerie/gal1.png", alt: "Latte Art" },
    { src: "/src/assets/gallerie/gal2.png", alt: "Latte Art Detail" },
    { src: "/src/assets/gallerie/gal3.png", alt: "Pâtisserie" },
    { src: "/src/assets/gallerie/gal4.png", alt: "Plat Signature" },
    { src: "/src/assets/gallerie/gal5.png", alt: "Pâtes Fraîches" },
    { src: "/src/assets/gallerie/gal6.png", alt: "Fruits de Mer" },
    { src: "/src/assets/gallerie/gal7.png", alt: "Petit Déjeuner" },
    { src: "/src/assets/gallerie/gal8.png", alt: "Crêpe Gourmande" },
    { src: "/src/assets/gallerie/gal9.png", alt: "Intérieur" },
    { src: "/src/assets/gallerie/gal10.png", alt: "Préparation Café" },
    { src: "/src/assets/gallerie/gal11.png", alt: "Décoration" },
    { src: "/src/assets/gallerie/gal12.png", alt: "Ambiance" },
    { src: "/src/assets/gallerie/gal13.png", alt: "Enseigne Lotus" },
    { src: "/src/assets/gallerie/gal14.png", alt: "Salade Fraîche" },
    { src: "/src/assets/gallerie/gal15.png", alt: "Salade Composée" },
    { src: "/src/assets/gallerie/gal16.png", alt: "Crevettes" },
    { src: "/src/assets/gallerie/gal17.png", alt: "Plat de Crevettes" },
    { src: "/src/assets/gallerie/gal18.png", alt: "Poisson Grillé" },
    { src: "/src/assets/gallerie/gal19.png", alt: "Bowl Santé" },
    { src: "/src/assets/gallerie/gal20.png", alt: "Pizza Artisanale" },
    { src: "/src/assets/gallerie/gal21.png", alt: "Sandwich Signature" },
    { src: "/src/assets/gallerie/gal22.png", alt: "Pâtisserie Maison" },
    { src: "/src/assets/gallerie/gal23.png", alt: "Salle" },
    { src: "/src/assets/gallerie/gal24.png", alt: "Bar à Café" },
]

  return (
    <div className="lotus-gallery">
      <div className="gallery-hero">
        <div className="decorative-line left"></div>
        <h1 className="gallery-title">GALERIE</h1>
        <div className="decorative-line right"></div>
      </div>

      <p className="gallery-intro">
        Explorez le Lotus Café à travers un aperçu de l'atmosphère unique, des plats délicieux et des moments
        inoubliables qui font de notre café un lieu relaxant. De nos intérieurs chaleureux aux créations culinaires,
        chaque image raconte une histoire de qualité, d'authenticité et de passion.
      </p>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} ref={(el) => (imagesRef.current[index] = el)} className="gallery-item">
            <img src={image.src || "/placeholder.svg"} alt={image.alt} />
            <div className="gallery-overlay">
              <span className="overlay-text">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
