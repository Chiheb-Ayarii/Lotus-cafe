"use client"

import { useEffect, useRef } from "react"
import "./lotusmenu.css"

export default function Lotusmenu({ onViewMore }) {
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
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

const menuCategories = [
    {
        title: "BOISSONS CHAUDES",
        subtitle: "Savourez la chaleur",
        description:
            "Nos boissons chaudes, soigneusement préparées, offrent une expérience riche en saveurs et en réconfort. Que ce soit un café fumant, un thé matcha crémeux ou un chocolat chaud parfumé, chaque boisson vous enveloppe dans une atmosphère chaleureuse et apaisante.",
        image: "/src/assets/gallerie/gal1.png",
        align: "left",
    },
    {
        title: "BOISSONS FROIDES",
        subtitle: "Fraîcheur et Légèreté",
        description:
            "Nos boissons froides sont un parfait équilibre entre fraîcheur et saveurs exquises. Que vous optiez pour un frappé glacé, un jus naturel ou un smoothie vibrant, chaque gorgée vous procure une sensation de légèreté et de bien-être.",
        image: "/src/assets/gallerie/gal2.png",
        align: "right",
    },
    {
        title: "SPÉCIALITÉS ASIATIQUES",
        subtitle: "Saveurs et Traditions",
        description:
            "Le coin asiatique vous transporte au cœur des saveurs authentiques de l'Orient. Découvrez une sélection de plats traditionnels, préparés avec des épices délicates et des ingrédients frais, offrant une expérience culinaire inoubliable.",
        image: "/src/assets/gallerie/gal3.png",
        align: "left",
    },
    {
        title: "CUISINE MÉDITERRANÉENNE",
        subtitle: "Saveurs Authentiques",
        description:
            "Notre coin méditerranéen met en valeur la richesse des traditions culinaires, offrant des plats savoureux et raffinés, préparés avec des ingrédients locaux et frais. Un hommage aux saveurs ensoleillées de la Méditerranée.",
        image: "/src/assets/gallerie/gal4.png",
        align: "right",
    },
    {
        title: "PÂTISSERIES ARTISANALES",
        subtitle: "Délices Sucrés à Savourer",
        description:
            "Laissez-vous tenter par nos pâtisseries artisanales, une sélection exquise de desserts faits maison, parfaits pour accompagner un café ou conclure un repas. Chaque création est un équilibre parfait entre saveur et finesse.",
        image: "/src/assets/gallerie/gal5.png",
        align: "left",
    },
    {
        title: "BRUNCHS GOURMANDS",
        subtitle: "Commencez votre journée",
        description:
            "Découvrez nos brunchs gourmands, préparés avec des ingrédients frais et de saison. Des options sucrées et salées pour satisfaire toutes vos envies matinales dans une ambiance zen et relaxante.",
        image: "/src/assets/gallerie/gal6.png",
        align: "right",
    },
    {
        title: "SALADES FRAÎCHES",
        subtitle: "Légèreté et Vitalité",
        description:
            "Nos salades fraîches sont composées d'ingrédients biologiques soigneusement sélectionnés. Colorées, nutritives et délicieuses, elles offrent une pause santé parfaite pour votre journée.",
        image: "/src/assets/gallerie/gal7.png",
        align: "left",
    },
    {
        title: "SANDWICHS SIGNATURE",
        subtitle: "Sandwichs gourmands et variés",
        description:
            "Découvrez nos sandwichs signature préparés avec des ingrédients frais et savoureux, offrant un équilibre parfait entre textures et goûts. Parfaits pour un déjeuner rapide ou un repas léger.",
        image: "/src/assets/gallerie/gal8.png",
        align: "right",
    },
    {
        title: "SOUPES RÉCONFORTANTES",
        subtitle: "Soupes maison bienfaisantes",
        description:
            "Savourez nos soupes maison, préparées avec des ingrédients frais et de qualité. Chaque cuillère vous offre un moment de réconfort, parfait pour vous réchauffer et vous ressourcer.",
        image: "/src/assets/gallerie/gal9.png",
        align: "left",
    },
    {
        title: "BOWLS ÉNERGÉTIQUES",
        subtitle: "Nutrition et Équilibre",
        description:
            "Nos bowls énergétiques combinent protéines, légumes frais et grains anciens pour un repas complet et équilibré. Parfaits pour les amateurs de cuisine saine et savoureuse.",
        image: "/src/assets/gallerie/gal10.png",
        align: "right",
    },
]

  return (
    <div className="lotus-menu">
      <div className="menu-hero">
        <p className="menu-subtitle">Une expérience culinaire raffinée</p>
        <h1 className="menu-title">MENU DU LOTUS CAFÉ</h1>
        <p className="menu-description">
          Le Menu du Lotus Café marie à la perfection saveurs locales et internationales, offrant des plats élégants et
          savoureux. Chaque choix est pensé pour satisfaire tous les goûts dans un cadre chaleureux et accueillant.
        </p>
      </div>

      <div className="menu-categories">
        {menuCategories.map((category, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`menu-category ${category.align}`}
          >
            <div className="category-image">
              <img src={category.image || "/placeholder.svg"} alt={category.title} />
            </div>
            <div className="category-content">
              <p className="category-subtitle">{category.subtitle}</p>
              <h2 className="category-title">{category.title}</h2>
              <p className="category-description">{category.description}</p>
               <button className="voir-plus-btn" onClick={() => onViewMore(category.title)}>VOIR PLUS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}