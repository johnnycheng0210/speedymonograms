import { Link } from 'react-router-dom'
import Logo from './Logo'
import { business } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__col">
          <Logo to={false} />
          <p className="footer__blurb">
            High quality embroidery and print for workwear, uniforms and
            personalised garments — crafted with care in Albany, Auckland.
          </p>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Visit &amp; Contact</h4>
          <ul className="footer__list">
            <li>
              <a href={business.address.maps} target="_blank" rel="noreferrer">
                {business.address.line1}, {business.address.line2}
              </a>
            </li>
            <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
            <li><a href={`tel:${business.phoneHref}`}>{business.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {business.name}. All rights reserved.</span>
        <span>Custom embroidery &amp; printing · Albany, Auckland</span>
      </div>
    </footer>
  )
}
