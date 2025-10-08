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
  "DOUCEURS & DESSERTS": {
    sections: [
      {
        title: "DESSERTS MAISON",
        subtitle: "La note sucrée parfaite",
        items: [
          { name: "Fondant au choix", price: "10 DT" },
          { name: "Cheesecake San Sebastian", price: "15 DT" },
          { name: "Cheesecakes au choix", price: "13 DT" },
          { name: "Tiramisu au choix", price: "13 DT" },
          { name: "Salade de fruits", price: "9 DT" },
          { name: "Glace duo", price: "9 DT" },
          { name: "Glace trio", price: "11 DT" },
          { name: "Banana split", price: "14 DT" },
          { name: "Mini assiette de fruits", price: "15 DT" },
          { name: "Maxi assiette de fruits", price: "25 DT" }
        ]
      }
    ]
  },
  "PETITS DÉJEUNERS & BRUNCH": {
    sections: [
      {
        title: "FORMULES PETIT DÉJEUNER",
        subtitle: "Le commencement parfait de votre journée",
        items: [
          { name: "Fast", price: "9 DT", description: "Café, jus au choix, eau 0.5L, viennoiserie" },
          { name: "Fast Gourmand", price: "13 DT", description: "Café, jus au choix, eau 0.5L, viennoiserie, omelette" },
          { name: "Lotus Rose", price: "20 DT", description: "Café, jus au choix, eau 0.5L, tartines cheddar bacon de boeuf, œufs brouillés, 3 mini pancakes nutella, pain perdu au miel" },
          { name: "Menu enfant", price: "15 DT", description: "Chocolat au lait, eau 0.5L, bol de céréale, mini pancake chocolat, œufs brouillés, jus au choix" }
        ]
      },
      {
        title: "BRUNCH WEEK-END",
        subtitle: "Une expérience gourmande à partager",
        items: [
          { name: "Brunch (2 personnes)", price: "59", description: "2 cafés, 2 jus au choix, 2 yaourts, viennoiseries, cakes, 2 mini brownies, 2 mini gàteaux, 2 mini cheeecakes, 4 mini pancakes chocolat, toast, miel, confiture, beurre et chocolat, assiette de charcuterie, 2 croissants salées, 2 mini crepes salées, 2 brochettes escalopes" }
        ]
      },
      {
        title: "FORMULES DUO",
        subtitle: "Partage et convivialité",
        items: [
          { name: "Zemni (2 personnes)", price: "49 DT", description: "2 cafés, 2 jus au choix, 2 cakes, 2 yaourts, toast, chamia, beurre et miel, mléwi, assiette gouta, huile d'olive, thon et harissa, 2 oeufs durs,2 bssissas, assiette de charcuterie, ojja, 2 brochettes escalopes" },
          { name: "Le Gourmand (2 personnes)", price: "49 DT", description: "2 cafés, 2 jus au choix, viennoiserie ou cake, 2 yaourts, toast, beurre , miel et chocolat, 2 mini gaufres au chocolat, œufs brouillés ou 2 omelettes, assiette de charcuterie, 2 croissants salées, 2 mini salades de fruits, 2 brochettes escalopes" },
          { name: "Le Fameux Royale (2 personnes)", price: "38 ", description: "2 cafés, 2 jus aux choix, eau 1L, viennoiserie, 2 omelettes aux fromages et légumes, assiette de charcuterie, 6 mini tartines de fromage avec saumon et bacon, 2 mini pancakes aux choix" }
        ]
      }
    ]
  },
  "CAFÉS & BOISSONS CHAUDES": {
    sections: [
      {
        title: "CAFÉS CLASSIQUES",
        subtitle: "L'art de la torréfaction",
        items: [
          { name: "Expresso", price: "3.8 DT" },
          { name: "Capucin", price: "4.3 DT" },
          { name: "Americano", price: "4.5 DT" },
          { name: "Café Latte", price: "4.8 DT" },
          { name: "Cappuccino", price: "6 DT" },
          { name: "Café Turc", price: "5.5 DT" },
          { name: "Nescafé au lait", price: "4.5 DT" },
          { name: "Nespresso", price: "6 DT" }
        ]
      },
      {
        title: "CAFÉS SPÉCIALITÉS",
        subtitle: "Créations uniques et raffinées",
        items: [
          { name: "Café glacé", price: "7 DT" },
          { name: "Café liégeois", price: "8 DT" },
          { name: "Chocolat au lait", price: "4.5 DT" }
        ]
      },
      {
        title: "CHOCOLATS CHAUDS",
        subtitle: "Riche, délicieux, décadent",
        items: [
          { name: "Chocolat chaud", price: "8 DT" },
          { name: "Chocolat chaud fruits secs", price: "9.5 DT" },
          { name: "Chocolat chantilly", price: "8.5 DT" },
          { name: "Chocolat chaud Oreo", price: "11 DT" },
          { name: "Chocolat chaud Nutella Oreo", price: "13 DT" }
        ]
      },
      {
       title: "THÉS TRADITIONNELS",
        subtitle: "Élégance et fraîcheur infusées",
        items: [
          { name: "Thé à la menthe", price: "5 DT" },
          { name: "Thé aux amandes", price: "8 DT" },
          { name: "Thé aux pignons", price: "9.5 DT" },
          { name: "Thé Royal LOTUS", price: "12 DT" },
          { name: "Thé infusion", price: "6 DT" },
          { name: "Ice tea", price: "12 DT" }
        ]
      }
    ]
  },
  "CITRONNADES & SOFT DRINKS": {
    sections: [
      {
        title: "SOFT DRINKS",
        subtitle: "Classiques et rafraîchissants",
        items: [
          { name: "Sodas", price: "4.5 DT" },
          { name: "Eaux gazéifiée", price: "4 DT" },
          { name: "Boissons énergétiques", price: "10 DT" },
          { name: "Eau 0.5L", price: "1.9 DT" },
          { name: "Eau 1 L", price: "3.5 DT" }

        ]

      },
      {
         title: "FRAPPUCCINOS",
        subtitle: "Fraîcheur et gourmandise",
        items: [
          { name: "Noisette", price: "11 DT" },
          { name: "Vanille", price: "11 DT" },
          { name: "Tiramisu", price: "11 DT" },
          { name: "Caramel", price: "11 DT" },
          { name: "Cookies", price: "11 DT" },
          { name: "Nutella", price: "12 DT" },
          { name: "Spéculoos", price: "12 DT" }
        ]
      },
      {
        title: "CITRONNADES",
        subtitle: "Rafraîchissantes et vivifiantes",
        items: [
          { name: "Citronnade", price: "7.5 DT" },
          { name: "Citronnade aux amandes", price: "9.5 DT" },
          { name: "Lemon menthe", price: "8 DT", description: "Citronnade, menthe fraîche" },
          { name: "Blue lemon", price: "11 DT", description: "Sorbet citron, citronnée, sirop de curacuo blue" }
        ]
      }
    ]
  },
  "BOISSONS FRAÎCHES & SMOOTHIES": {
    sections: [
      {
        title: "JUS FRAIS",
        subtitle: "Fraîcheur naturelle pressée",
        items: [
          { name: "Orange", price: "7.5 DT" },
          { name: "Fraise", price: "8.8 DT" },
          { name: "Melon", price: "9 DT" },
          { name: "Ananas", price: "11 DT" },
          { name: "Kiwi", price: "9.5 DT" },
          { name: "Pomme", price: "9 DT" },
          { name: "Banane", price: "10 DT" }
        ]
      },
      {
        title: "SMOOTHIES VITAMINÉS",
        subtitle: "Onctueux et revitalisants",
        items: [
          { name: "White", price: "10.5 DT", description: "Pomme, banane" },
          { name: "Kiwis", price: "10.5 DT", description: "Kiwi, banane, basilic" },
          { name: "Pink", price: "11 DT", description: "Fruits rouges" },
          { name: "Love", price: "11 DT", description: "Banane, fraise" }
        ]
      },
      {
        title: "COCKTAILS DÉTOX",
        subtitle: "Purifiants et énergisants",
        items: [
          { name: "Fresh", price: "12 DT", description: "Citron, concombre, gingembre, menthe" },
          { name: "Punch", price: "10 DT", description: "Pomme, kiwi, basilic" },
          { name: "Power", price: "12 DT", description: "Pomme, Ananas, cannelle" },
          { name: "Vitamine", price: "10 DT", description: "Pomme, cannelle, citron" },
          { name: "Purple", price: "12 DT", description: "Betterave, ananas, citron" },
          { name: "Energy", price: "11 DT", description: "Carotte, pomme, citron" },
          { name: "Detox", price: "13 DT", description: "Pastèque, citron, menthe, ananas" }
        ]
      },
      {
        title: "COCKTAILS EXOTIQUES",
        subtitle: "Voyage des sens",
        items: [
          { name: "Piña colada", price: "14 DT", description: "Ananas, noix de coco" },
          { name: "Perle", price: "14 DT", description: "Pêche, banane, framboise" },
          { name: "Banane berry", price: "12 DT", description: "Banane, pomme" },
          { name: "Arc-en-ciel", price: "14 DT", description: "Fraise, kiwi, banane" },
          { name: "Exotic", price: "12 DT", description: "Mangue, ananas" },
          { name: "Passion", price: "12 DT", description: "Fruits de passion" },
          { name: "Ô banane", price: "12 DT", description: "Banane, oreo" },
          { name: "Tropical", price: "14 DT", description: "Pomme, ananas, mangue" },
          { name: "Banana-boust", price: "16 DT", description: "Banane, dattes, fruits secs, miel" }
        ]
      }
    ]
  },
  "MOJITOS & MILKSHAKES": {
    sections: [
      {
        title: "MOJITOS VIRGINS",
        subtitle: "Rafraîchissants et fruités",
        items: [
          { name: "Virgin", price: "9 DT", description: "Menthe fraîche, citron frais, sirop Mojito" },
          { name: "Red", price: "12 DT", description: "Menthe fraîche, citron frais, sirop Mojito, framboise" },
          { name: "Blue", price: "10 DT", description: "Menthe fraîche, citron frais, sirop Mojito, Curaçao bleu" },
          { name: "White", price: "12 DT", description: "Menthe fraîche, citron frais, ananas, sirop Mojito" },
          { name: "Yellow", price: "12 DT", description: "Menthe fraîche, citron frais, sirop Mojito, mangue" },
          { name: "Green", price: "12 DT", description: "Menthe fraîche, citron frais, sirop Mojito, kiwi" },
          { name: "LOTUS", price: "14 DT", description: "Menthe fraîche, citron frais, sirop mojito, fruit de passion" }
        ]
      },
      {
        title: "MILKSHAKES AMÉRICAINS",
        subtitle: "Onctueux et gourmands",
        items: [
          { name: "Oreo", price: "12 DT" },
          { name: "Nutella", price: "14 DT" },
          { name: "Red", price: "13 DT", description: "Fruits rouges" },
          { name: "Kinder Bueno", price: "13 DT" },
          { name: "Ferrero rocher", price: "13 DT" },
          { name: "Les 3 chocolats", price: "15 DT", description: "Nutella, kinder, ferrero rocher" },
          { name: "LOTUS", price: "14 DT", description: "Nutella speculoos, banane" }
        ]
      },
      {
        title: "SPÉCIALITÉS",
        subtitle: "Créations signature",
        items: [
          { name: "J wejem Lotus", price: "16 DT", description: "Yaourt, miel, biscuit, fruits secs, fruits de la saison" }
        ]
      }
    ]
  },
  "PLATS & PÂTES": {
    sections: [
      {
        title: "PÂTES ITALIENNES",
        subtitle: "L'authenticité de l'Italie",
        items: [
          { name: "Putianesca", price: "Sur demande", description: "Penne, sauce tomate, olives, piment rouge, thon" },
          { name: "Bolognaise", price: "Sur demande", description: "Sauce tomate, viande hachée, piment vert" },
          { name: "Penne 4 fromages", price: "Sur demande", description: "Sauce blanche, roquefort, parmesan, gruyère, cheddar" },
          { name: "Tagliatelle au saumon", price: "Sur demande", description: "Sauce rosé, saumon, parmesan" },
          { name: "Spaghetti fruits de mer", price: "Sur demande" },
          { name: "Penne poulet champignon", price: "Sur demande", description: "Sauce au choix, poulet, champignon, parmesan" },
          { name: "Penne crevette", price: "Sur demande", description: "Sauce au choix, crevette, chevrette, parmesan" }
        ]
      },
      {
        title: "LASAGNES",
        subtitle: "Généreuses et savoureuses",
        items: [
          { name: "Lasagne poulet", price: "Sur demande" },
          { name: "Lasagne viande hachée", price: "Sur demande" },
          { name: "Lasagne crevette", price: "Sur demande" }
        ]
      },
      {
        title: "PLATS PRINCIPAUX",
        subtitle: "Accompagnés de riz, légumes sautés et frites",
        items: [
          { name: "Escalope grillée", price: "Sur demande" },
          { name: "Escalope panée", price: "Sur demande" },
          { name: "Escalope à la crème", price: "Sur demande" },
          { name: "Cordon bleu sauce roquefort", price: "Sur demande" },
          { name: "Emincé de bœuf", price: "Sur demande" },
          { name: "Plat enfant", price: "Sur demande", description: "Escalope pané, pâte, frite" }
        ]
      }
    ]
  },
  "SANDWICHS, BURGERS & TACOS": {
    sections: [
      {
        title: "SANDWICHS CIABATTA",
        subtitle: "Sur pain artisanal croustillant",
        items: [
          { name: "Classic sandwich", price: "10 DT", description: "Thon ou jambon, mayonnaise, sauce à l'ail, laitue, tomate, oignon frais, fromage cheddar, frites" },
          { name: "Chiko's sandwich", price: "13 DT", description: "Poulet pané ou grillé, mayonnaise, sauce Pesto, laitue, tomate, oignons caramélisés, fromage cheddar, frites" }
        ]
      },
      {
        title: "HAMBURGERS",
        subtitle: "Généreux et savoureux",
        items: [
          { name: "Chicken Burger", price: "15", description: "Mayonnaise, ketchup, poulet panné, laitue, tomate, oignon et champignons caramélisés, fromage cheddar, frites" },
          { name: "Bpeuf Burger", price: "16", description: "Mayonnaise, ketchup, viande hachée, laitue, tomate, oignon et champignons caramélisés, fromage cheddar, frites" }
        ]
      },
      {
        title: "PANINIS & MAKLOUB",
        subtitle: "Spécialités maison",
        items: [
          { name: "Panini jambon, fromage", price: "9 DT" },
          { name: "Panini thon, fromage", price: "9 DT" },
          { name: "Makloub au thon", price: "11 DT" },
          { name: "Makloub au poulet grillé", price: "13 DT" },
          { name: "Makloub au viande hachée", price: "15 DT" },
          { name: "Baguette farcie viande hachée", price: "16 DT" },
          { name: "Baguette farcie escalope", price: "15 DT" }
        ]
      },
      {
        title: "TACOS",
        subtitle: "Généreux et savoureux",
        items: [
          { name: "Escalope grillé", price: "12 DT"},
          { name: "Escalope pané", price: "13 DT" },
          { name: "Cordon bleu", price: "14 DT" },
          { name: "Viande hachée", price: "14 DT" }
        ]
      }
    ]
  },
  "PIZZAS & OJJAS": {
    sections: [
      {
        title: "PIZZAS ARTISANALES",
        subtitle: "Pâte fine et garnitures généreuses",
        items: [
          { name: "Margherita", price: "15 DT", description: "Sauce tomate, mozzarella, basilic, olives" },
          { name: "Neptune", price: "18 DT", description: "Sauce tomate, thon, mozzarella, olives, basilic" },
          { name: "Pepperoni", price: "17 DT", description: "Sauce tomate, mozzarella, Pepperoni" },
          { name: "Pollo", price: "19 DT", description: "Sauce blanche, poulet, mozzarella, champignons, oignons, pesto" },
          { name: "Mexicaine", price: "20 DT", description: "Sauce tomate, mozzarella, viande hachée, poivron" },
          { name: "4 fromages", price: "22 DT", description: "Sauce blanche, roquefort, mozzarella, gruyère, cheddar" },
          { name: "Bresaola", price: "24 DT", description: "Sauce tomate, parmesan, bresaola, mozzarella, roquette, oignon" },
          { name: "Saumon", price: "25 DT", description: "Sauce blanche, saumon fumé, mozzarella, champignons" }
        ]
      },
      {
        title: "SUPPLEMENT",
        items: [ {name: "Bordure fromage", price: "3.5 DT" }]
      },
      {
        title: "OJJAS",
        subtitle: "Saveurs tunisiennes authentiques",
        items: [
          { name: "Ojja merguez", price: "23 DT" },
          { name: "Ojja fruits de mer", price: "28 DT" } 
        ]
      }
    ]
  },
  "SALADES & CRÊPES SALÉES": {
    sections: [
      {
        title: "CRÊPES SALÉES",
        subtitle: "Savoureuses et gourmandes",
        items: [
          { name: "Crêpe thon fromage", price: "12 DT" },
          { name: "Crêpe jambon fromage", price: "11 DT" },
          { name: "Crêpe tunisienne", price: "14 DT", description: "Thon, fromage, oeuf, harissa, olives" },
          { name: "Crêpe rose", price: "15 DT", description: "Jambon fumé, sauce Gorgonzola, noix" },
          { name: "Crêpe saumon", price: "16 DT", description: "Mozzarella, saumon fumé" },
          { name: "Crêpe poulet", price: "16 DT", description: "Poulet, champignon, fromage" }
        ]
      },
      
      {
        title: "CRÊPES SUCRÉES",
        subtitle: "La douceur à l'état pur",
        items: [
          { name: "Crêpe Nutella", price: "14 DT" },
          { name: "Crêpe Nutella banane", price: "15 DT" },
          { name: "Crêpe Nutella banane, noisette", price: "16 DT" },
          { name: "Crêpe Spéculoos Nutella", price: "16 DT" },
          { name: "Crêpe Nutella pistache", price: "17 DT" },
          { name: "Crêpe Lotus", price: "23 DT" }
        ]
      },
      {
        title: "GAUFRES & PANCAKES",
        subtitle: "Moelleux et gourmands",
        items: [
          { name: "Gaufres Nutella", price: "14 DT" },
          { name: "Gaufres Nutella banane noisette", price: "16 DT" },
          { name: "Pancakes Nutella", price: "15 DT" },
          { name: "Pancakes Nutella, banane", price: "16 DT" },
          { name: "Pancakes Nutella, banane, noisette", price: "17 DT" },
          { name: "Pancakes Lotus", price: "24 DT" }
        ]
      },
      {
        title: "SALADES",
        subtitle: "Fraîches et équilibrées",
        items: [
          { name: "Salade César", price: "16 DT", description: "Laitue, tomate, poulet grillé, sauce césar, sauce César, parmeson, crouton à l'ail" },
          { name: "Lotus Salade", price: "20 DT", description: "Laitue,roquette, tomate, bresaola, fromage blanc, galite, roquefort, pesto, crouton à l'ail" },
          { name: "Salade Niçoise", price: "16 DT", description: "oeuf dur, thon vinaigrette, laitue, tomate" },
          { name: "Salade Poulet", price: "20 DT", description: "Laitue, poulet grillé, maïs, avocat, tomate, oignon rouge" },
          { name: "Salade au Saumon", price: "26 DT", description: "Laitue, roquette, tomate, saumon fumé, noix" },
          { name: "Salade milanaise", price: "18 DT", description: "escalope pané, laitue, tomate, gruyère" }
        ]
      } 
    ]
  },
  
  "CHICHAS & FOUNDCHARES": {
    sections: [
      {
        title: "CHICHAS PARFUMÉES",
        subtitle: "Ambiance et détente",
        items: [
          { name: "Chicha classique", price: "13 DT", description: "Pomme, menthe, fraise, melon" },
          { name: "Chicha raisin menthe", price: "15 DT" },
          { name: "Chicha cheikh money", price: "15 DT" },
          { name: "Supplément chicha glacé", price: "2 DT" },
          { name: "Chicha love", price: "15 DT" },
          { name: "Formule chicha", price: "18 DT", description: "Chicha, thé à la menthe, eau 0.5L" }
        ]
      }
    ]
  }
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
