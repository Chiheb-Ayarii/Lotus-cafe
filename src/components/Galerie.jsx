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
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455657/gal1_n5u43w.png", alt: "Milkshake" ,loading:"lazy" },
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455654/gal2_ntsdla.png", alt: "Salade" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455659/gal3_zuelng.png", alt: "Tiramisu",loading:"lazy" },
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455660/gal4_aq8it3.png", alt: "Cheesecake" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455656/gal5_rftgxa.png", alt: "Pâtes Fraîches" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455656/gal6_mcyhfe.png", alt: "Jus" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455660/gal7_azdrdj.png", alt: "Jus" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455662/gal8_hlv1jj.png", alt: "Lasagne" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455663/gal9_mrropb.png", alt: "IceMilkshake" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455669/gal10_buaitn.png", alt: "Pasta" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455670/gal11_yg7gct.png", alt: "Plat" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455667/gal12_mik1jh.png", alt: "cocktail",loading:"lazy" },
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455669/gal13_fgkcac.png", alt: "Fruits de mer",loading:"lazy" },
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455671/gal14_qhuz7f.png", alt: "Fruits de mer",loading:"lazy" },
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455664/gal15_kxaono.jpg", alt: "Plat" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455665/gal16_nkhbjj.jpg", alt: "Milksahke" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455667/gal17_menu96.jpg", alt: "Milkshake" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455667/gal18_kwtty3.jpg", alt: "Salde",loading:"lazy" },
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455668/gal19_zi4ml0.jpg", alt: "Plat" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455669/gal20_uqo6yn.jpg", alt: "Jus" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455669/gal21_f9zupd.jpg", alt: "Salade" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455669/gal22_ucokto.jpg", alt: "Pasta" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455670/gal23_eamn3i.jpg", alt: "Plat" ,loading:"lazy"},
    { src: "https://res.cloudinary.com/dxoxd6inf/image/upload/f_webp,q_auto,w_600/v1760455670/gal24_sg5nro.jpg", alt: "Jus" ,loading:"lazy"},
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
