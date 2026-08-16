// Single source of truth for business details & content.
export const business = {
  name: 'Speedy Monograms',
  tagline: 'Custom Embroidery & Printing',
  email: 'speedymonogramsalbany@gmail.com',
  phone: '09 414 2488',
  phoneHref: '+6494142488',
  mobile: '022 426 3178',
  mobileHref: '+64224263178',
  address: {
    line1: '65 Paul Matthews Road',
    line2: 'Rosedale, Auckland 0632',
    country: 'New Zealand',
    maps: 'https://maps.google.com/?q=65+Paul+Matthews+Road+Rosedale+Auckland',
  },
  hours: [
    { days: 'Monday – Friday', time: '9:30am – 5:00pm' },
    { days: 'Weekends', time: 'Closed' },
  ],
}

export const services = [
  {
    slug: 'embroidery',
    title: 'Embroidery',
    short: 'A professional finish that lasts, stitched to your design.',
    image: '/images/embroidery_machine.jpeg',
  },
  {
    slug: 'blanks',
    title: 'Blank Apparel',
    short: 'Quality blank tees, jerseys, caps and workwear.',
    image: '/images/folded-blanks.jpg',
    // the stack sits right of centre, so nudge the square crop across
    focus: '62% 50%',
  },
  {
    slug: 'vinyl-printing',
    title: 'Vinyl Printing',
    short: 'Bold, durable prints for names, numbers and logos.',
    image: '/images/printing.jpg',
  },
  {
    slug: 'photo-transfer',
    title: 'Photo Transfer',
    short: 'Full-colour images transferred crisply onto garments.',
    image: '/images/apparel-tee.jpg',
  },
]
