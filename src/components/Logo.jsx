import { Link } from 'react-router-dom'
import logo from '/logo.png'

/**
 * The real Speedy Monograms logo. It's a flat single-colour mark, so on dark
 * surfaces we render it white via a CSS filter (see `.logo--light` in index.css).
 */
export default function Logo({ to = '/', light = true, className = '' }) {
  const img = (
    <img
      src={logo}
      alt="Speedy Monograms"
      className={`logo__img ${light ? 'logo--light' : ''}`}
      width="600"
      height="217"
    />
  )

  if (to === false) return <span className={`logo ${className}`}>{img}</span>
  return (
    <Link to={to} className={`logo ${className}`} aria-label="Speedy Monograms — home">
      {img}
    </Link>
  )
}
