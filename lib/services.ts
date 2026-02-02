export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  highlights?: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'tatuaje-custom',
    title: 'Tatuaje custom',
    shortDescription: 'Design unic, creat împreună cu tine.',
    description:
      'Fiecare tatuaj este unic. Lucrăm împreună la un design personalizat, de la schiță la piele. Stiluri variate: realism, tradițional, minimalist, blackwork, fineline.',
    highlights: ['Design personalizat', 'Consultare gratuită', 'Materiale premium'],
  },
  {
    slug: 'cover-up',
    title: 'Cover-up & retușuri',
    shortDescription: 'Transformăm tatuajele vechi în lucrări noi.',
    description:
      'Acoperim tatuaje vechi, regretate sau slabe cu designuri noi, bine gândite. Experiență în retușuri și îmbunătățiri ale lucrărilor existente.',
    highlights: ['Consultare pentru feasability', 'Schițe înainte de lucru', 'Rezultate naturale'],
  },
  {
    slug: 'piercing',
    title: 'Piercing',
    shortDescription: 'Piercing profesional, igienă maximă.',
    description:
      'Executăm piercing-uri cu bijuterii de calitate și în condiții de igienă stricte. Consiliere pentru îngrijire și alegerea locației.',
    highlights: ['Bijuterii calitate', 'Igienă riguroasă', 'Consiliere post-procedură'],
  },
];
