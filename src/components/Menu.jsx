"use client"

import { useEffect, useRef } from "react"
import "./Menu.css"

export default function Lotusmenu({ onViewMore, onNavigate }) {
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
        title: "PETITS DÉJEUNERS & BRUNCH",
        subtitle: "Commencez Votre Journée en Douceur",
        description:
                  "Découvrez nos formules petit-déjeuner soigneusement préparées pour bien commencer la journée. Des options simples aux brunchs complets, il y en a pour tous les appétits et tous les moments.",
        image: "/menuphotos/petits dej et brunchs.webp",
        align: "left",
    },
    {
        title: "CAFÉS & BOISSONS CHAUDES",
        subtitle: "L'Art de la Torréfaction et du Chocolat",
        description:
            "Des grains soigneusement sélectionnés et des préparations maîtrisées pour révéler toutes les subtilités de l'arôme, du classique espresso aux créations les plus gourmandes.",
        image: "/menuphotos/cafes et boissons chaudes.webp",
        align: "right",
    },
    {
        title: "CITRONNADES & SOFT DRINKS",
        subtitle: "Élégance et Fraîcheur Infusées",
        description:
            "Des breuvages qui marient tradition et modernité, des thés parfumés aux citronnades vivifiantes, pour une pause rafraîchissante à tout moment de la journée.",
        image: "/menuphotos/thes citronnades et soft drinks.webp",
        align: "left",
    },
    {
        title: "BOISSONS FRAÎCHES & SMOOTHIES",
        subtitle: "Vitalité et Fraîcheur à Chaque Gorgée",
        description:
            "Des fruits frais pressés à la commande, des smoothies onctueux et des créations originales pour faire le plein de vitamines et de saveurs naturelles.",
        image: "/menuphotos/boissons fraiches et smoothies.webp",
        align: "right",
    },
    {
        title: "PLATS & PÂTES",
        subtitle: "Savoureuses Créations Culinaires",
        description:
            "Une cuisine généreuse qui marie tradition italienne et influences méditerranéennes, des pâtes al dente aux plats composés, pour un repas complet et satisfaisant.",
        image: "/menuphotos/plats et pates.webp",
        align: "left",
    },
    {
        title: "SANDWICHS, BURGERS & TACOS",
        subtitle: "Gourmandises à Emporter ou sur Place",
        description:
            "Du pain frais, des garnitures généreuses et des associations savoureuses pour un repas rapide mais jamais ordinaire, entre tradition et modernité.",
        image: "/menuphotos/sandwichs burgers et tacos.webp",
        align: "right",
    },
    {
        title: "PIZZAS & OJJAS",
        subtitle: "Partage et Convivialité",
        description:
            "La fine fleur de la cuisine de partage, des pizzas à la pâte fine et croustillante aux ojjas brûlants et parfumés, pour des moments de complicité gustative.",
        image: "/menuphotos/Pizzas et ojjas.webp",
        align: "left",
    },
    {
        title: "SALADES & CRÊPES ",
        subtitle: "Fraîcheur et Équilibre",
        description:
            "Découvrez nos sandwichs signature préparés avec des ingrédients frais et savoureux, offrant un équilibre parfait entre textures et goûts. Parfaits pour un déjeuner rapide ou un repas léger.",
        image: "/menuphotos/salades et crepes salees.webp",
        align: "right",
    },
    {
        title: "DOUCEURS & DESSERTS",
        subtitle: "La Note Sucrée Parfaite",
        description:
            "Savourez nos soupes maison, préparées avec des ingrédients frais et de qualité. Chaque cuillère vous offre un moment de réconfort, parfait pour vous réchauffer et vous ressourcer.",
        image: "/menuphotos/crepes et pancake.webp",
        align: "left",
    },
    {
        title: "CHICHAS ",
        subtitle: "Ambiance et Détente",
        description:
            "Un mélange parfait de saveurs raffinées et d’ambiance chaleureuse, à partager entre amis autour d’une chicha parfumée.",
        image: "/menuphotos/chicha.webp",
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
        <button
            className="voir-plus-btn Fullmenu"
            onClick={() => {
              if (onNavigate) onNavigate('fullmenu')
              if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
            }}
          >
            Voir Menu Complet
          </button>
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
               <button
                 className="voir-plus-btn"
                 onClick={() => {
                   if (onViewMore) onViewMore(category.title)
                   if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
                 }}
               >
                 VOIR PLUS
               </button>
            </div>

            {/* small modern green separator under each category */}
            <div
              className="category-separator"
              style={{
                width: "80%",
                maxWidth: "150px",
                height: 0,
                borderTop: "2px solid #27ae60",
                margin: "16px auto 4px",
                borderRadius: "2px",
                opacity: 0.95,
              }}
            />
          </div>
          
        ))}
      </div>
    </div>
  )
}