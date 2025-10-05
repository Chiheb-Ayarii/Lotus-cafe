"use client"

import { useEffect, useRef } from "react"
import "./menudetail.css"

export default function MenuDetail({ category, onBack }) {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
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
  }, [category])

  const menuData = {
    "BOISSONS CHAUDES": {
      sections: [
        {
          title: "CAFÉ",
          subtitle: "Éveillez votre café",
          items: [
            { name: "EXPRESSO", price: "8 DT" },
            { name: "EXPRESSO AMERICAIN", price: "9 DT" },
            { name: "CAPUCIN", price: "9 DT" },
            { name: "CAPUCIN NESTLÉ", price: "10 DT" },
            { name: "CAFÉ CRÈME", price: "10 DT" },
            { name: "CAFÉ CRÈME NESTLÉ", price: "11 DT" },
            { name: "CAPPUCCINO", price: "12 DT" },
          ],
        },
        {
          title: "NESPRESSO",
          subtitle: "Expérience café unique",
          items: [
            { name: "NESPRESSO", price: "10 DT" },
            { name: "EXPRESSO AMERICAIN", price: "12 DT" },
            { name: "CAPUCIN", price: "10 DT" },
            { name: "MACCHIATO", price: "14 DT" },
            { name: "CAPUCIN NESTLÉ", price: "13 DT" },
            { name: "CAFÉ CRÈME", price: "13 DT" },
            { name: "CAFÉ CRÈME NESTLÉ", price: "14 DT" },
            { name: "CAPPUCCINO", price: "15 DT" },
            { name: "EXPRESSO", price: "10 DT" },
          ],
        },
        {
          title: "CAFÉ TURC",
          subtitle: "Saveur authentique turque",
          items: [
            { name: "CAFÉ TURC", price: "11 DT", description: "Café turc avec assortiment de pâtisseries Tunisiennes" },
          ],
        },
        {
          title: "CHOCOLAT CHAUD",
          subtitle: "Riche, délicieux, décadent",
          items: [
            { name: "CHOCOLAT CHAUD", price: "15 DT" },
            { name: "CHOCOLAT VIENNOIS", price: "16 DT" },
            { name: "CHOCOLAT LIÉGEOIS", price: "16 DT" },
            { name: "CHOCOLAT À LA CRÈME CHANTILLY", price: "16 DT" },
          ],
        },
        {
          title: "THÉS",
          subtitle: "Nos zones subtiles",
          items: [
            { name: "THÉ À LA MENTHE FRAÎCHE", price: "9 DT" },
            { name: "THÉS AUX AMANDES", price: "13 DT" },
            { name: "THÉS AUX PIGNONS", price: "14 DT" },
            { name: "THÉ INFUSION", price: "13 DT" },
            {
              name: "THÉ GOURMAND",
              price: "17 DT",
              description: "Thé Gourmand avec assortiment de pâtisseries tunisiennes",
            },
          ],
        },
      ],
    },
    "BOISSONS FROIDES": {
      sections: [
        {
          title: "JUS FRAIS",
          subtitle: "Fraîcheur naturelle",
          items: [
            { name: "JUS D'ORANGE", price: "10 DT" },
            { name: "JUS DE CITRON", price: "9 DT" },
            { name: "JUS DE PAMPLEMOUSSE", price: "11 DT" },
            { name: "JUS DE FRAISE", price: "12 DT" },
            { name: "JUS D'AVOCAT", price: "13 DT" },
            { name: "JUS DE MANGUE", price: "12 DT" },
          ],
        },
        {
          title: "SMOOTHIES",
          subtitle: "Onctueux et vitaminés",
          items: [
            { name: "SMOOTHIE TROPICAL", price: "14 DT" },
            { name: "SMOOTHIE BERRY", price: "14 DT" },
            { name: "SMOOTHIE GREEN", price: "15 DT" },
            { name: "SMOOTHIE LOTUS", price: "16 DT", description: "Notre création signature" },
          ],
        },
        {
          title: "FRAPPÉS",
          subtitle: "Glacés et délicieux",
          items: [
            { name: "FRAPPÉ CAFÉ", price: "12 DT" },
            { name: "FRAPPÉ CARAMEL", price: "13 DT" },
            { name: "FRAPPÉ CHOCOLAT", price: "13 DT" },
            { name: "FRAPPÉ VANILLE", price: "13 DT" },
          ],
        },
        {
          title: "LIMONADES",
          subtitle: "Rafraîchissantes et pétillantes",
          items: [
            { name: "LIMONADE CLASSIQUE", price: "8 DT" },
            { name: "LIMONADE MENTHE", price: "9 DT" },
            { name: "LIMONADE FRAISE", price: "10 DT" },
            { name: "LIMONADE PASSION", price: "10 DT" },
          ],
        },
      ],
    },
    "SPÉCIALITÉS ASIATIQUES": {
      sections: [
        {
          title: "SUSHI & MAKI",
          subtitle: "Fraîcheur japonaise",
          items: [
            { name: "CALIFORNIA ROLL", price: "22 DT" },
            { name: "SALMON MAKI", price: "24 DT" },
            { name: "TUNA MAKI", price: "25 DT" },
            { name: "VEGETARIAN ROLL", price: "18 DT" },
            { name: "DRAGON ROLL", price: "28 DT" },
          ],
        },
        {
          title: "PLATS CHAUDS",
          subtitle: "Saveurs d'Asie",
          items: [
            { name: "PAD THAÏ", price: "26 DT" },
            { name: "NOUILLES SAUTÉES", price: "24 DT" },
            { name: "RIZ CANTONAIS", price: "22 DT" },
            { name: "CURRY VERT", price: "28 DT" },
            { name: "POULET TERIYAKI", price: "27 DT" },
          ],
        },
        {
          title: "SOUPES",
          subtitle: "Réconfort asiatique",
          items: [
            { name: "SOUPE MISO", price: "12 DT" },
            { name: "SOUPE TOM YUM", price: "15 DT" },
            { name: "SOUPE PHO", price: "18 DT" },
            { name: "SOUPE RAMEN", price: "20 DT" },
          ],
        },
      ],
    },
    "CUISINE MÉDITERRANÉENNE": {
      sections: [
        {
          title: "MEZZE",
          subtitle: "Partage méditerranéen",
          items: [
            { name: "HOUMOUS", price: "12 DT" },
            { name: "BABA GHANOUSH", price: "13 DT" },
            { name: "TABOULÉ", price: "11 DT" },
            { name: "FALAFEL", price: "14 DT" },
            { name: "ASSIETTE MEZZE", price: "28 DT", description: "Assortiment de nos mezze" },
          ],
        },
        {
          title: "PLATS PRINCIPAUX",
          subtitle: "Saveurs ensoleillées",
          items: [
            { name: "COUSCOUS ROYAL", price: "32 DT" },
            { name: "TAJINE D'AGNEAU", price: "35 DT" },
            { name: "BROCHETTES MIXTES", price: "30 DT" },
            { name: "POISSON GRILLÉ", price: "38 DT" },
            { name: "KAFTEJI", price: "18 DT" },
          ],
        },
        {
          title: "SALADES",
          subtitle: "Fraîcheur méditerranéenne",
          items: [
            { name: "SALADE GRECQUE", price: "16 DT" },
            { name: "SALADE TUNISIENNE", price: "14 DT" },
            { name: "SALADE CÉSAR", price: "18 DT" },
            { name: "SALADE LOTUS", price: "20 DT" },
          ],
        },
      ],
    },
    "PÂTISSERIES ARTISANALES": {
      sections: [
        {
          title: "PÂTISSERIES FRANÇAISES",
          subtitle: "Élégance sucrée",
          items: [
            { name: "ÉCLAIR AU CHOCOLAT", price: "9 DT" },
            { name: "TARTE AU CITRON", price: "11 DT" },
            { name: "MILLE-FEUILLE", price: "12 DT" },
            { name: "MACARON (3 pièces)", price: "10 DT" },
            { name: "PARIS-BREST", price: "13 DT" },
          ],
        },
        {
          title: "PÂTISSERIES ORIENTALES",
          subtitle: "Douceurs traditionnelles",
          items: [
            { name: "BAKLAVA", price: "8 DT" },
            { name: "MAKROUD", price: "7 DT" },
            { name: "ZLABIA", price: "6 DT" },
            { name: "ASSIDA", price: "9 DT" },
            { name: "ASSIETTE ORIENTALE", price: "18 DT" },
          ],
        },
        {
          title: "GÂTEAUX",
          subtitle: "Créations maison",
          items: [
            { name: "CHEESECAKE", price: "14 DT" },
            { name: "TIRAMISU", price: "13 DT" },
            { name: "FONDANT AU CHOCOLAT", price: "12 DT" },
            { name: "TARTE AUX FRUITS", price: "11 DT" },
          ],
        },
      ],
    },
    "BRUNCHS GOURMANDS": {
      sections: [
        {
          title: "BRUNCH SUCRÉ",
          subtitle: "Douceur matinale",
          items: [
            { name: "PANCAKES", price: "16 DT", description: "Avec sirop d'érable et fruits frais" },
            { name: "FRENCH TOAST", price: "15 DT", description: "Pain perdu à la cannelle" },
            { name: "GAUFRES", price: "14 DT", description: "Avec chantilly et coulis" },
            { name: "AÇAI BOWL", price: "18 DT", description: "Granola et fruits de saison" },
          ],
        },
        {
          title: "BRUNCH SALÉ",
          subtitle: "Énergie du matin",
          items: [
            { name: "ŒUFS BÉNÉDICTE", price: "20 DT" },
            { name: "OMELETTE LOTUS", price: "18 DT" },
            { name: "AVOCADO TOAST", price: "17 DT" },
            { name: "CROISSANT JAMBON FROMAGE", price: "15 DT" },
            { name: "ASSIETTE ANGLAISE", price: "24 DT" },
          ],
        },
        {
          title: "FORMULES BRUNCH",
          subtitle: "Complet et généreux",
          items: [
            { name: "BRUNCH LOTUS", price: "35 DT", description: "Boisson chaude + jus + plat + dessert" },
            { name: "BRUNCH VÉGÉTARIEN", price: "32 DT", description: "Option 100% végétale" },
          ],
        },
      ],
    },
    "SALADES FRAÎCHES": {
      sections: [
        {
          title: "SALADES COMPOSÉES",
          subtitle: "Fraîcheur et vitalité",
          items: [
            { name: "SALADE CÉSAR", price: "18 DT" },
            { name: "SALADE NIÇOISE", price: "20 DT" },
            { name: "SALADE GRECQUE", price: "16 DT" },
            { name: "SALADE CAPRESE", price: "17 DT" },
            { name: "SALADE QUINOA", price: "19 DT" },
          ],
        },
        {
          title: "SALADES SIGNATURE",
          subtitle: "Créations Lotus",
          items: [
            { name: "SALADE LOTUS", price: "22 DT", description: "Saumon fumé, avocat, roquette" },
            { name: "SALADE BUDDHA BOWL", price: "21 DT", description: "Légumes rôtis, houmous, graines" },
            { name: "SALADE POULET GRILLÉ", price: "20 DT", description: "Poulet mariné, légumes croquants" },
          ],
        },
      ],
    },
    "SANDWICHS SIGNATURE": {
      sections: [
        {
          title: "SANDWICHS CHAUDS",
          subtitle: "Gourmands et savoureux",
          items: [
            { name: "CLUB SANDWICH", price: "18 DT" },
            { name: "CROQUE-MONSIEUR", price: "15 DT" },
            { name: "PANINI POULET", price: "16 DT" },
            { name: "BURGER LOTUS", price: "22 DT" },
            { name: "WRAP FALAFEL", price: "17 DT" },
          ],
        },
        {
          title: "SANDWICHS FROIDS",
          subtitle: "Frais et légers",
          items: [
            { name: "SANDWICH THON", price: "14 DT" },
            { name: "SANDWICH POULET", price: "15 DT" },
            { name: "SANDWICH VÉGÉTARIEN", price: "13 DT" },
            { name: "BAGUETTE JAMBON BEURRE", price: "12 DT" },
          ],
        },
      ],
    },
    "SOUPES RÉCONFORTANTES": {
      sections: [
        {
          title: "SOUPES TRADITIONNELLES",
          subtitle: "Réconfort maison",
          items: [
            { name: "SOUPE DE LENTILLES", price: "12 DT" },
            { name: "CHORBA FRIK", price: "14 DT" },
            { name: "SOUPE DE POISSON", price: "16 DT" },
            { name: "HARIRA", price: "13 DT" },
          ],
        },
        {
          title: "SOUPES CRÉMEUSES",
          subtitle: "Veloutés onctueux",
          items: [
            { name: "VELOUTÉ DE CHAMPIGNONS", price: "13 DT" },
            { name: "VELOUTÉ DE POTIRON", price: "12 DT" },
            { name: "VELOUTÉ D'ASPERGES", price: "14 DT" },
            { name: "CRÈME DE BROCOLI", price: "12 DT" },
          ],
        },
      ],
    },
    "BOWLS ÉNERGÉTIQUES": {
      sections: [
        {
          title: "POKE BOWLS",
          subtitle: "Fraîcheur hawaïenne",
          items: [
            { name: "POKE BOWL SAUMON", price: "26 DT" },
            { name: "POKE BOWL THON", price: "28 DT" },
            { name: "POKE BOWL VÉGÉTARIEN", price: "22 DT" },
            { name: "POKE BOWL CREVETTES", price: "27 DT" },
          ],
        },
        {
          title: "BUDDHA BOWLS",
          subtitle: "Équilibre et nutrition",
          items: [
            { name: "BUDDHA BOWL POULET", price: "24 DT" },
            { name: "BUDDHA BOWL TOFU", price: "22 DT" },
            { name: "BUDDHA BOWL FALAFEL", price: "23 DT" },
            { name: "BUDDHA BOWL LOTUS", price: "26 DT" },
          ],
        },
      ],
    },
  }

  const currentMenu = menuData[category]

  if (!currentMenu) {
    return <div>Menu non trouvé</div>
  }

  return (
    <div className="menu-detail">
      <div className="menu-detail-header">
        <button onClick={onBack} className="back-btn">
          ← RETOUR AU MENU
        </button>
        <h1 className="menu-detail-title">{category}</h1>
      </div>

      <div className="menu-detail-content">
        {currentMenu.sections.map((section, index) => (
          <div key={index} ref={(el) => (sectionsRef.current[index] = el)} className="menu-section">
            <div className="section-header">
              <p className="section-subtitle">{section.subtitle}</p>
              <h2 className="section-title">{section.title}</h2>
              <div className="title-underline"></div>
            </div>

            <div className="menu-items">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    {item.description && <span className="item-description">{item.description}</span>}
                  </div>
                  <div className="item-dots"></div>
                  <span className="item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
