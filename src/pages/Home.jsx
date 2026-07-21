import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { services, business } from '../data'

export default function Home() {
  return (
    <>
      {/* thread-spool image band, directly below the nav */}
      <div
        className="thread-band thread-band--top"
        style={{ backgroundImage: `url(/images/hero-threads.jpg)` }}
        role="img"
        aria-label="Colourful embroidery thread spools"
      />

      {/* ---------- Hero text panel ---------- */}
      <section className="hero">
        <div className="container hero__content">
          <Reveal>
            <span className="eyebrow centered">Albany · Auckland</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display">Custom Embroidery &amp; Printing</h1>
          </Reveal>
          <Reveal delay={160} as="p" className="hero__sub">
            High quality workwear, uniforms and personalised garments —
            finished with care and guaranteed to last.
          </Reveal>
          <Reveal delay={240}>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--on-navy">
                Get in touch <span className="arrow">→</span>
              </Link>
              <Link to="/services" className="btn btn--outline-light">
                View our services <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services (light, to keep the page airy) ---------- */}
      <section className="section cream">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow centered">What we do</span></Reveal>
            <Reveal delay={80}><h2 className="h2">Our Services</h2></Reveal>
            <Reveal delay={140} as="p" className="measure center">
              From a single item to bulk orders, we bring your ideas to life
              with expert advice and attention to detail.
            </Reveal>
          </div>

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link to={`/services#${s.slug}`} className="svc-card">
                  <div className="svc-card__media">
                    <img src={s.image} alt={`${s.title} at Speedy Monograms`} loading="lazy" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Visit in store ---------- */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media split__media--framed">
            <img src="/images/apparel-rack.jpg" alt="Customised garments on the rack in store" loading="lazy" />
          </Reveal>
          <Reveal delay={120} className="split__body">
            <h2 className="h2">Visit us in store</h2>
            <p>
              Visit our showroom to discover quality embroidery and printing
              solutions in person. Bring your logo or garment and we&rsquo;ll
              help you create something you&rsquo;re proud to wear.
            </p>
            <p style={{ fontWeight: 700, color: 'var(--ink)' }}>We&rsquo;ll help you:</p>
            <ul className="feature-list">
              <li>Choose fonts, colours and finishes</li>
              <li>Find and source the right garments for the job</li>
              <li>Perfect your design before we start</li>
            </ul>
            <div>
              <Link to="/contact" className="btn" style={{ marginTop: '0.4rem' }}>
                Plan your visit <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="section--tight navy">
        <div className="container center" style={{ display: 'grid', gap: '1.4rem', justifyItems: 'center' }}>
          <Reveal><h2 className="h2" style={{ maxWidth: '18ch' }}>Ready to bring your idea to life?</h2></Reveal>
          <Reveal delay={100} as="p" className="measure center">
            Call {business.phone} or drop into the showroom — we&rsquo;d love to help!
          </Reveal>
          <Reveal delay={160}>
            <Link to="/contact" className="btn btn--on-navy">Contact us <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
