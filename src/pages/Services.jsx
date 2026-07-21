import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const details = [
  {
    slug: 'embroidery',
    title: 'Embroidery',
    lede: 'Add a professional finish to your garments with quality embroidery that lasts.',
    body: 'We can customise a wide range of garments and products, digitising your logo for a clean, durable stitch every time.',
    points: ['Business uniforms & workwear', 'Sports team apparel', 'Caps, jackets & hoodies'],
    hero: '/images/embroidery.jpg',
    gallery: ['/images/embroidery-2.jpg', '/images/embroidery-detail.jpg', '/images/hero-threads.jpg'],
  },
  {
    slug: 'vinyl-printing',
    title: 'Vinyl Printing',
    lede: 'Bold, durable prints for names, numbers and single-colour logos.',
    body: 'Heat-applied vinyl gives a crisp, vibrant result that stands up to repeated washing — ideal for both sports teams and professional events.',
    points: ['Names & player numbers', 'Event & promo tees', 'High-visibility workwear'],
    hero: '/images/printing.jpg',
    gallery: ['/images/vinyl-1.jpg', '/images/vinyl-2.jpg', '/images/vinyl-3.jpg'],
  },
  {
    slug: 'photo-transfer',
    title: 'Photo Transfer',
    lede: 'Full-colour images and detailed artwork transferred crisply onto fabric.',
    body: 'Perfect when your design has gradients, photographs or fine detail that needs to be reproduced accurately.',
    points: ['Full-colour logos & artwork', 'Photographic prints', 'One-offs & small runs'],
    hero: '/images/apparel-flat.jpg',
    gallery: ['/images/photo-1.jpg', '/images/photo-2.jpg', '/images/photo-3.jpg'],
  },
]

function Gallery({ images, label }) {
  return (
    <div className="gallery">
      {images.map((src, i) => (
        <figure key={i}>
          <img src={src} alt={`${label} example ${i + 1}`} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow centered">What we do</span></Reveal>
          <Reveal delay={80}><h1 className="display">Our Services</h1></Reveal>
          <Reveal delay={140} as="p">
            From a single item to bulk orders, we help bring your ideas to life
            with expert advice and attention to detail.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {details.map((s, i) => (
            <div className="svc-block" key={s.slug} id={s.slug}>
              <div className={`split ${i % 2 ? 'split--reverse' : ''}`}>
                <Reveal className="split__media">
                  <img src={s.hero} alt={`${s.title} at Speedy Monograms`} loading="lazy" />
                </Reveal>
                <Reveal delay={120} className="split__body">
                  <h2 className="h2">{s.title}</h2>
                  <p className="svc-lede">{s.lede}</p>
                  <p>{s.body}</p>
                  <ul className="feature-list">
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </Reveal>
              </div>
              <Reveal delay={80} style={{ marginTop: 'clamp(2.1rem, 4.25vw, 3.4rem)' }}>
                <Gallery images={s.gallery} label={s.title} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Quality you can trust */}
      <section className="section navy">
        <div className="container">
          <div className="section-head center">
            <Reveal><span className="eyebrow centered">Why choose us</span></Reveal>
            <Reveal delay={80}><h2 className="h2">Quality You Can Trust</h2></Reveal>
            <Reveal delay={140} as="p" className="measure center">
              With over 20 years of experience in embroidery and printing,
              Speedy Monograms delivers reliable, high-quality results for
              businesses, schools, clubs and individuals.
            </Reveal>
          </div>

          <div className="steps">
            {[
              { n: '01', h: 'Bring your idea', p: 'Come in with a logo, a garment or just a rough concept — we’ll take it from there.' },
              { n: '02', h: 'We refine it', p: 'We advise on fonts, colours, finishes and the right products for the job.' },
              { n: '03', h: 'We make it', p: 'Your design is stitched or printed with care and finished to a high standard.' },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 100} className="step">
                <span className="step__n">{step.n}</span>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="center" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <Link to="/contact" className="btn btn--on-navy">Start your order <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
