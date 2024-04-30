import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'Ksh5600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'Ksh5900',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'Ksh4400',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'Ksh3100',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'Ksh2600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Ksh2000',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Ksh1600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Ksh1000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Ksh3100',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Ksh2600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Awarded for our dedication to delivering exceptional dining experiences and outstanding value.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Acknowledged for our innovative approach and contribution to the culinary landscape.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Honored for our unwavering commitment to exceptional service and culinary mastery.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: "Recognized for Chef Kevin Luo's creative genius and culinary expertise.",
  },
];

export default { wines, cocktails, awards };
