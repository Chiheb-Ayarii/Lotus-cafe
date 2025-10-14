"use client"

import { useEffect, useRef } from "react"
import "./Galerie.css"

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
    { src: "gallerie/gal1.webp", alt: "Milkshake" ,loading:"lazy" },
    { src: "gallerie/gal2.webp", alt: "Salade" ,loading:"lazy"},
    { src: "gallerie/gal3.webp", alt: "Tiramisu",loading:"lazy" },
    { src: "gallerie/gal4.webp", alt: "Cheesecake" ,loading:"lazy"},
    { src: "gallerie/gal5.webp", alt: "Pâtes Fraîches" ,loading:"lazy"},
    { src: "gallerie/gal6.webp", alt: "Jus" ,loading:"lazy"},
    { src: "gallerie/gal7.webp", alt: "Jus" ,loading:"lazy"},
    { src: "gallerie/gal8.webp", alt: "Lasagne" ,loading:"lazy"},
    { src: "gallerie/gal9.webp", alt: "IceMilkshake" ,loading:"lazy"},
    { src: "gallerie/gal10.webp", alt: "Pasta" ,loading:"lazy"},
    { src: "gallerie/gal11.webp", alt: "Plat" ,loading:"lazy"},
    { src: "gallerie/gal12.webp", alt: "cocktail",loading:"lazy" },
    { src: "gallerie/gal13.webp", alt: "Fruits de mer",loading:"lazy" },
    { src: "gallerie/gal14.webp", alt: "Fruits de mer",loading:"lazy" },
    { src: "gallerie/gal15.webp", alt: "Plat" ,loading:"lazy"},
    { src: "gallerie/gal16.webp", alt: "Milksahke" ,loading:"lazy"},
    { src: "gallerie/gal17.webp", alt: "Milkshake" ,loading:"lazy"},
    { src: "gallerie/gal18.webp", alt: "Salde",loading:"lazy" },
    { src: "gallerie/gal19.webp", alt: "Plat" ,loading:"lazy"},
    { src: "gallerie/gal20.webp", alt: "Jus" ,loading:"lazy"},
    { src: "gallerie/gal21.webp", alt: "Salade" ,loading:"lazy"},
    { src: "gallerie/gal22.webp", alt: "Pasta" ,loading:"lazy"},
    { src: "gallerie/gal23.webp", alt: "Plat" ,loading:"lazy"},
    { src: "gallerie/gal24.webp", alt: "Jus" ,loading:"lazy"},
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
