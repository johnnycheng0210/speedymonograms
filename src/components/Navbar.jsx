import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // The nav is solid on every page (the home page now leads with an image band).
  const overHero = false

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const solid = !overHero || scrolled || open

  return (
    <header className={`nav ${solid ? 'nav--solid' : 'nav--top'}`}>
      <div className="container nav__inner">
        <Logo />

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav__cta ${isActive ? 'is-active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
