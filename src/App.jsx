import React, { useState, useEffect } from 'react'
import Nav from './components/nav'
import Home from './components/Home'
import LotusAbout from './components/Lotusabout.jsx'
import Lotusgallery from './components/lotusgallery.jsx'
import Lotusmenu from './components/Lotusmenu.jsx'
import MenuDetail from './components/Menudetail.jsx'
import LotusContact from './components/contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleNavigate = (page) => {
    setActivePage(page)
    if (page !== 'menuDetail') {
      setSelectedCategory(null)
    }
  }

  // scroll to top whenever the active page changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activePage])

  const handleViewCategory = (category) => {
    setSelectedCategory(category)
    setActivePage('menuDetail')
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