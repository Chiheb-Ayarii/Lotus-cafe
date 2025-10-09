import React, { useState, useEffect, useRef } from 'react'
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
  // store scroll positions per page so we can restore when returning
  const scrollPositions = useRef({})
  const isInitialLoad = useRef(true)

  // central navigate function: updates state and URL hash
  const handleNavigate = (page, opts = {}) => {
    // If user clicked the same page (and not asking to change category), smooth-scroll to top
    const isSamePage = page === activePage && (!(page === 'menuDetail' && opts && opts.category && opts.category !== selectedCategory))
    if (isSamePage) {
      try {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } catch (e) {}
      return
    }

    // save current scroll position for the current active page (only when actually navigating away)
    try {
      if (typeof window !== 'undefined' && activePage) {
        scrollPositions.current[activePage] = window.scrollY || window.pageYOffset || 0
      }
    } catch (e) {
      // ignore
    }

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

  // removed duplicate top scroll effect; scrolling is handled in the restore effect below

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

  // restore scroll when activePage changes (but not on very first load if there's no saved position)
  useEffect(() => {
    if (typeof window === 'undefined') return

    // short delay to allow DOM rendering before scrolling
    const t = setTimeout(() => {
      const pos = scrollPositions.current[activePage]
      if (typeof pos === 'number') {
        window.scrollTo({ top: pos, behavior: 'auto' })
      } else {
        // if no saved position, keep behavior: on first load we already scrolled to top earlier
        // but for navigations to some pages we may want top:0
        if (!isInitialLoad.current) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
      isInitialLoad.current = false
    }, 50)

    return () => clearTimeout(t)
  }, [activePage])

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