import Reveal from '../components/Reveal'
import { business } from '../data'

const store = '/images/apparel-rack.jpg'

const Icon = {
  mail: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 5v2a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1Z" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
}

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow centered">Get in touch</span></Reveal>
          <Reveal delay={80}><h1 className="display">Ready to Customise?</h1></Reveal>
          <Reveal delay={140} as="p">
            Bring your ideas, logo or garment into our showroom — or call us and
            we&rsquo;ll help you create something unique.
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section" style={{ paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div className="container split">
          <Reveal className="split__media">
            <img src={store} alt="Speedy Monograms showroom interior" loading="lazy" />
          </Reveal>
          <Reveal delay={120} className="split__body">
            <span className="eyebrow">Find us</span>
            <h2 className="h2">Location</h2>

            <div className="info-row">
              <h4>Address</h4>
              <p>
                {business.address.line1},<br />
                {business.address.line2}, {business.address.country}
              </p>
            </div>

            <div className="info-row">
              <h4>Opening hours</h4>
              {business.hours.map((h) => (
                <p key={h.days}>{h.days} · {h.time}</p>
              ))}
            </div>

            <a href={business.address.maps} target="_blank" rel="noreferrer" className="btn" style={{ justifySelf: 'start' }}>
              Get directions <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section" style={{ paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow centered">Say hello</span></Reveal>
            <Reveal delay={80}><h2 className="h2">Get in touch</h2></Reveal>
          </div>

          <div className="contact-grid">
            <Reveal className="contact-card">
              <span className="contact-card__icon">{Icon.mail}</span>
              <h4>Email</h4>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </Reveal>
            <Reveal delay={100} className="contact-card">
              <span className="contact-card__icon">{Icon.phone}</span>
              <h4>Phone</h4>
              <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
            </Reveal>
            <Reveal delay={200} className="contact-card">
              <span className="contact-card__icon">{Icon.mobile}</span>
              <h4>Mobile</h4>
              <a href={`tel:${business.mobileHref}`}>{business.mobile}</a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
