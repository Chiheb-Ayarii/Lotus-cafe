import styles from "./fullmenu.module.css"


export default function LotusCafeMenuPage() {
  return (
    <div className={styles.lotusMenuContainer}>
      <header className={styles.lotusMenuHeader}>
        <div className={styles.lotusIconContainer}>
          <svg className={styles.lotusIcon} viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#DAA520", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#8B7355", stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* Center petal (tall) */}
            <path
              className={styles.lotusPetalCenter}
              d="M 200 250 Q 200 100, 200 80 Q 200 100, 200 250"
              fill="none"
              stroke="url(#lotusGradient)"
              strokeWidth="3"
            />
            <path
              className={styles.lotusPetalCenter}
              d="M 200 250 Q 160 120, 200 80 Q 240 120, 200 250 Z"
              fill="none"
              stroke="url(#lotusGradient)"
              strokeWidth="3"
            />

            {/* Left petal */}
            <path
              className={styles.lotusPetalLeft}
              d="M 200 250 Q 80 200, 70 180 Q 100 220, 200 250 Z"
              fill="none"
              stroke="url(#lotusGradient)"
              strokeWidth="3"
            />
            <path
              className={styles.lotusPetalLeft}
              d="M 200 250 Q 100 160, 70 180 Q 120 200, 200 250"
              fill="none"
              stroke="url(#lotusGradient)"
              strokeWidth="3"
            />

            {/* Right petal */}
            <path
              className={styles.lotusPetalRight}
              d="M 200 250 Q 320 200, 330 180 Q 300 220, 200 250 Z"
              fill="none"
              stroke="url(#lotusGradient)"
              strokeWidth="3"
            />
            <path
              className={styles.lotusPetalRight}
              d="M 200 250 Q 300 160, 330 180 Q 280 200, 200 250"
              fill="none"
              stroke="url(#lotusGradient)"
              strokeWidth="3"
            />
          </svg>
        </div>
        <h1 className={styles.lotusTitle}>LOTUS</h1>
        <p className={styles.lotusSubtitle}>Café & Restaurant</p>
      </header>

      <div className={styles.bookContainer}>
        <main className={styles.lotusMenuContent}>
          {/* Left page sections */}
          <div className={styles.leftPage}>
            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Detox</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Fresh</h3>
                    <p className={styles.lotusItemDescription}>Citron, concombre, gingembre, menthe</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Punch</h3>
                    <p className={styles.lotusItemDescription}>Pomme, kiwi, basilic</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    10<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Power</h3>
                    <p className={styles.lotusItemDescription}>Pomme, Ananas, cannelle</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Vitamine</h3>
                    <p className={styles.lotusItemDescription}>Pomme, cannelle, citron</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    10<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Purple</h3>
                    <p className={styles.lotusItemDescription}>Betrave, ananas, citron</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Energy</h3>
                    <p className={styles.lotusItemDescription}>Carotte, pome, citron</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Detox</h3>
                    <p className={styles.lotusItemDescription}>Pasteque, citron, menthe, ananas</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Smoothies</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>White</h3>
                    <p className={styles.lotusItemDescription}>Pomme, banane</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    10.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Kiwis</h3>
                    <p className={styles.lotusItemDescription}>Kiwi, banane, basilic</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    10.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Pink</h3>
                    <p className={styles.lotusItemDescription}>Fruits rouges</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Love</h3>
                    <p className={styles.lotusItemDescription}>Banane, fraise</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Exotic</h3>
                    <p className={styles.lotusItemDescription}>Mangue, ananas</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Passion</h3>
                    <p className={styles.lotusItemDescription}>Fruits de passion</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Ô banane</h3>
                    <p className={styles.lotusItemDescription}>Banane, oreo</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Cocktails</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Piña colad</h3>
                    <p className={styles.lotusItemDescription}>Ananas, noix de coco</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>perle</h3>
                    <p className={styles.lotusItemDescription}>Pêche, banane, framboise</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>banane berry</h3>
                    <p className={styles.lotusItemDescription}>Banane, pomme</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>arc-en-ciel</h3>
                    <p className={styles.lotusItemDescription}>Fraise, kiwi, banane</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>tropical</h3>
                    <p className={styles.lotusItemDescription}>Pomme, ananas, mangue</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>banana-boust</h3>
                    <p className={styles.lotusItemDescription}>Banane, dattes, fruits secs, miel</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cocktail de la saison</h3>
                    <p className={styles.lotusItemDescription}>3 fruits de saison au choix</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Café</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Expresso</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    3.6<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Capucin</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    4.3<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Americano</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    4.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Café Latte</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    4.8<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cappuccino</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    6<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Café Turc</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    5.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Café glacé</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    7<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Café liégeois</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    8<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Nescafé au lait</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    4.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chocolat au lait</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    4.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Nespresso</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    6<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Supplements</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Arome</h3>
                    <p className={styles.lotusItemDescription}>Noisette, Caramel, Spéculoos, Vanille, Cookies</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    2.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Nestlé</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    2.5<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Boissons Chaudes</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chocolat chaud</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    8<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chocolat chaud fruit sec</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    9.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chocolat chantilly</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    8.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chocolat chaud Oreo</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chocolat chaud Nutella Oreo</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Frappuccinos</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Noisette</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Vanille</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Tiramisu</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Caramel</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cookies</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Nutella</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Spéculoos</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Sandwiches Ciabata</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Classic sandwich (thon ou jambon)</h3>
                    <p className={styles.lotusItemDescription}>
                      Mayonnaise, sauce à l'ail, laitue, tomate, oignon frais, fromage Cheddar, frites
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    19<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Mayonnaise sandwich</h3>
                    <p className={styles.lotusItemDescription}>
                      Mayonnaise, sauce à l'ail, laitue, tomate, oignon frais, fromage Cheddar, frites
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chiko's sandwich (poulet pané ou grillé)</h3>
                    <p className={styles.lotusItemDescription}>
                      Mayonnaise, sauce Pesto, laitue, tomate, oignons caramélisés, fromage Cheddar, frites
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Hamburgers</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chicken Burger</h3>
                    <p className={styles.lotusItemDescription}>
                      Mayonnaise, ketchup, poulet panné, laitue, tomate, oignon et champignons caramélisés, fromage
                      Cheddar, frites
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Bœuf Burger</h3>
                    <p className={styles.lotusItemDescription}>
                      Mayonnaise, ketchup, viande hachée, laitue, tomate, oignon et champignons caramélisés, fromage
                      cheddar, frites
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Paninis</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Panini jambon, fromage</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    9<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Panini thon, fromage</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    9<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Tacos</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Escalope grillé</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Escalope pané</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cordon bleu</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Viande hachée</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.bookSpine}></div>

          {/* Right page sections */}
          <div className={styles.rightPage}>
            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Salades</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Salade César</h3>
                    <p className={styles.lotusItemDescription}>
                      Laitue, tomate, poulet grillé, sauce césar, parmesan, crouton à l'ail
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Lotus Salade</h3>
                    <p className={styles.lotusItemDescription}>
                      Laitue, roquette, tomate, bresaola, fromage blanc, galite, roquefort, pesto, crouton à l'ail
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    20<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Salade de saumon</h3>
                    <p className={styles.lotusItemDescription}>Laitue, roquette, tomate, saumon fumé, noix</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    26<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Salade tropicole</h3>
                    <p className={styles.lotusItemDescription}>Crevette, ananas, laitue, tomate, roquette, concombre</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    26<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Salade niçoise</h3>
                    <p className={styles.lotusItemDescription}>Oeuf dur, thon vinaigrette, laitue, tomate</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Salade milanaise</h3>
                    <p className={styles.lotusItemDescription}>Escalope pané, laitue, tomate, gruyère</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    18<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Plats</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Escalope grillée</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    19.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Escalope panée</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    21.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Escalope à la crème</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    24.5<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cordon bleu sauce roquefort</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    24<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Emincé de bœuf</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    42<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Plat enfant</h3>
                    <p className={styles.lotusItemDescription}>Escalope panné, pâte, frite</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    17<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <p className={styles.lotusItemNote}>
                      Tout les plats sont servis avec du riz au pâte, légume sautés et frite
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Menu Enfant</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Menu enfant</h3>
                    <p className={styles.lotusItemDescription}>
                      Chocolat au lait, eau 0.5l, bol de céréale, mini pancake chocolat, œufs brouillés, jus au choix
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Le Brunch</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Le brunch (2 personnes)</h3>
                    <p className={styles.lotusItemDescription}>
                      2 cafés, 2 jus au choix, 2 yaourts, viennoiseries, cakes, 2 mini brownies, 2 mini gâteaux, 2 mini
                      cheesecakes, 4 mini pancakes chocolat, toast, miel, confiture, beurre et chocolat, assiette de
                      charcuterie, 2 croissants salées, 2 mini crêpes salées, 2 brochettes escalopes, nuggets, calamar
                      doré
                    </p>
                    <p className={styles.lotusItemNote}>→ Brunch disponible uniquement le week-end</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    59<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <p className={styles.lotusItemDescription}>Rq : croissant ou cake (selon disponibilité)</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Les Petits Déjeuner</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Fast</h3>
                    <p className={styles.lotusItemDescription}>Café, jus au choix, eau 0.5l, viennoiserie</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    9<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Fast gourmand</h3>
                    <p className={styles.lotusItemDescription}>Café, jus au choix, eau 0.5l, viennoiserie, omelette</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Lotus rose</h3>
                    <p className={styles.lotusItemDescription}>
                      Café, jus au choix, eau 0.5l, tartines cheddar bacon de bœuf, œufs brouillés, 3 mini pancakes
                      nutella, pain perdu au miel
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    20<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Zemni (2 personnes)</h3>
                    <p className={styles.lotusItemDescription}>
                      2 cafés, 2 jus au choix, 2 cakes, 2 yaourts, toast, chamia, beurre et miel, mléwi, assiette gouta,
                      huile d'olive, thon et harissa, 2 œufs durs, 2 bssissas, assiette de charcuterie, ojja, 2
                      brochettes escalopes
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    49<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Le gourmand (2 personnes)</h3>
                    <p className={styles.lotusItemDescription}>
                      2 cafés, 2 jus au choix, viennoiserie ou cake, 2 yaourts, toast beurre, miel et chocolat, 2 mini
                      gaufre au chocolat, œufs brouillés ou 2 omelettes, assiette de charcuterie, 2 croissants salées, 2
                      mini salades de fruits, 2 brochettes escalopes
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    49<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Le fameux royale (2 personnes)</h3>
                    <p className={styles.lotusItemDescription}>
                      2 cafés, 2 jus aux choix, eau 1L, viennoiserie, 2 omelettes aux fromages et légumes, assiette de
                      charcuterie, 6 mini tartines de fromage avec saumon et bacon, 2 mini pancakes aux choix
                    </p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    38<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <p className={styles.lotusItemDescription}>Rq : croissant ou cake (selon disponibilité)</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Crêpes</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpes Salées</h3>
                  </div>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe thon fromage</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    12<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe jambon fromage</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe tunisienne</h3>
                    <p className={styles.lotusItemDescription}>Thon, fromage, oeuf, harissa, olives</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe rose</h3>
                    <p className={styles.lotusItemDescription}>Jambon fumé, sauce Gorgonzola, noix</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe saumon</h3>
                    <p className={styles.lotusItemDescription}>Mozzarella, saumon fumé</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe poulet</h3>
                    <p className={styles.lotusItemDescription}>Poulet, champignon, fromage</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpes Sucrées</h3>
                  </div>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe Nutella</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe Nutella banane</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe Nutella banane, noisette</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe Spéculoos Nutella</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe Nutella pistache</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    17<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Crêpe Lotus</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    23<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Gaufres</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Gaufres Sucré</h3>
                  </div>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Gaufres Nutella</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Gaufres Nutella banane noisette</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    16<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Desserts</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Fondant au choix</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    10<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cheesecake San Sebastian</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Cheesecake au choix</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Tiramisu au choix</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Salade de fruits</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    9<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Glace duo</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    9<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Glace trio</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    11<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Banane split</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    14<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Mini assiette de fruits</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Maxi assiette de fruits</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    25<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>

            <section className={styles.lotusMenuSection}>
              <h2 className={styles.lotusSectionTitle}>Chichas</h2>
              <div className={styles.lotusMenuItems}>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chicha</h3>
                    <p className={styles.lotusItemDescription}>Pomme, menthe, fraise, melon</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    13<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chicha raisin menthe</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chicha cheikh money</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Chicha love</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    15<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Supplément chicha glacé</h3>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    2<sup>DT</sup>
                  </span>
                </div>
                <div className={styles.lotusMenuItem}>
                  <div className={styles.lotusItemInfo}>
                    <h3 className={styles.lotusItemName}>Formule chicha</h3>
                    <p className={styles.lotusItemDescription}>Chicha, thé à la menthe, eau 0.5l</p>
                  </div>
                  <span className={styles.lotusItemPrice}>
                    18<sup>DT</sup>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer className={styles.lotusMenuFooter}>
        <p>Lotus Café & Restaurant</p>
        <p>Bon Appétit!</p>
      </footer>
    </div>
  )
}