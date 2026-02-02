export const SITE = {
  name: 'SEVEN INK.',
  tagline: 'tattoo society',
  description: 'Salon de tatuaje în inima Bucureștiului. Artă, stil și profesionalism.',
  phone: '0725029404',
  address: 'Strada Lipscani 43, 030032 București',
  addressShort: 'Lipscani 43, București',
  email: 'contact@sevenink.ro',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.656876052123!2d26.1009936!3d44.4322963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffe5d0a9c30b%3A0x7f080458674c22a5!2sSEVEN%20INK%20TATTOO%20SOCIETY!5e1!3m2!1sen!2sro!4v1770034240057!5m2!1sen!2sro',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Acasă' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
] as const;
