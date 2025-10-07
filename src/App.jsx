import React, { useState, useEffect } from 'react'
import Nav from './components/nav'
import Home from './components/Home'
import LotusAbout from './components/Lotusabout.jsx'
import Lotusgallery from './components/Galerie.jsx'
import Lotusmenu from './components/Menu.jsx'
import MenuDetail from './components/Menudetail.jsx'
import LotusContact from './components/contact.jsx'
import Footer from './components/Footer.jsx'
import Fullmenu from './components/Fullmenu.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)

  // central navigate function: updates state and URL hash
  const handleNavigate = (page, opts = {}) => {
    // update local state
    setActivePage(page)
    if (page !== 'menuDetail') {
      setSelectedCategory(null)
    }

    // update URL hash to allow back/forward and refresh-preserve
    try {
      if (opts && opts.category) {
        const encoded = encodeURIComponent(opts.category)
        // use a simple query-style within the hash
        window.location.hash = `${page}?cat=${encoded}`
      } else {
        window.location.hash = page
      }
    } catch (e) {
      // ignore for server-side renders or restricted environments
    }
  }

  // scroll to top whenever the active page changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activePage])

  // on mount: read hash to set initial page, and listen for hash changes
  useEffect(() => {
    if (typeof window === 'undefined') return

    const parseHash = () => {
      const raw = window.location.hash.replace(/^#/, '') || 'home'
      // support optional query param after ? (e.g. menuDetail?cat=xyz)
      const [pagePart, queryPart] = raw.split('?')
      if (pagePart) {
        setActivePage(pagePart)
      }
      if (queryPart) {
        const params = new URLSearchParams(queryPart)
        const cat = params.get('cat')
        if (cat) setSelectedCategory(decodeURIComponent(cat))
      }
    }

    // parse hash on initial load
    parseHash()

    // update when back/forward or other hash changes happen
    const onHashChange = () => parseHash()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleViewCategory = (category) => {
    setSelectedCategory(category)
    // navigate and include category in the hash so refresh/back preserves it
    handleNavigate('menuDetail', { category })
  }

  let PageComponent
  switch (activePage) {
    case 'about':
      PageComponent = <LotusAbout />
      break
    case 'gallery':
      PageComponent = <Lotusgallery />
      break
    case 'menu':
      PageComponent = <Lotusmenu onViewMore={handleViewCategory} />
      break
    case 'menuDetail':
      PageComponent = <MenuDetail category={selectedCategory} onBack={() => handleNavigate('menu')} />
      break
    case 'fullmenu':
      PageComponent = <Fullmenu />
      break
    case 'contact':
      PageComponent = <LotusContact />
      break
    case 'home':
    default:
      PageComponent = <Home />
      break
  }

  return (
    <>
  <Nav onNavigate={handleNavigate} />
  {React.cloneElement(PageComponent, { onNavigate: handleNavigate })}
  <Footer onNavigate={handleNavigate} />
    </>
  )
}

export default App