/**
 * Imagini pentru Hero (fundal care se schimbă la 5 secunde).
 * Adaugă fișiere în public/hero/ (ex: 1.jpg, 2.jpg) și listează-le aici.
 * Poți folosi și URL-uri externe.
 */
export const HERO_IMAGES: string[] = [
  '/hero/1.jpg',
  '/hero/2.jpg',
  '/hero/3.jpg',
  '/hero/4.jpg',
  '/hero/5.jpg',
];

/**
 * Toate imaginile din galerie (public/gallery/).
 * Pe prima pagină se afișează primele 6; pe pagina /galerie toate.
 */
export const GALLERY_IMAGES: string[] = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
];

/** Primele 6 imagini – pentru secțiunea Galerie de pe prima pagină */
export const HOME_GALLERY_IMAGES = GALLERY_IMAGES.slice(0, 6);
