import images from './images';

const soda = [
  {
    title: 'Coca Cola',
    price: '$16',
    tags: 'AU | Bottle',
  },
  {
    title: 'Pepsi',
    price: '$19',
    tags: 'AU | Bottle',
  },
  {
    title: 'Olipop',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Alta',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Zevia',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Florida',
    price: '$20',
    tags: 'Lemon Jus | Orange Jus | soda | 30 ml',
  },
  {
    title: "Colipona",
    price: '$16',
    tags: 'Raspberry | Orange | Lemon',
  },
  {
    title: 'Dark Joldo',
    price: '$10',
    tags: 'Strawberry Jus | Citrus juice | Sugar',
  },
  {
    title: 'Fashback',
    price: '$31',
    tags: 'Boubon | Brown sugar | Bitter',
  },
  {
    title: 'Goro',
    price: '$26',
    tags: 'Lemon | Sweets | Calona | Orange Jus',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { soda, cocktails, awards };
