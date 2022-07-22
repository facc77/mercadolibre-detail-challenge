import product1 from './img/products/product1.png';
import product2 from './img/products/product2.png';
import product3 from './img/products/product3.png';
import product4 from './img/products/product4.png';
import product5 from './img/products/product5.png';
import product6 from './img/products/product6.png';
import product7 from './img/products/product7.png';
import product8 from './img/products/product8.png';
import product9 from './img/products/product9.png';
import product10 from './img/products/product10.png';
import promotedProduct1 from './img/products/promotedProduct1.png';
import promotedProduct2 from './img/products/promotedProduct2.png';
import promotedProduct3 from './img/products/promotedProduct3.png';
import promotedProduct4 from './img/products/promotedProduct4.png';
import MercadoProduct1 from './img/MercadoProduct1.png';
import MercadoProduct2 from './img/MercadoProduct2.png';
import MercadoProduct3 from './img/MercadoProduct3.png';
import MercadoProduct4 from './img/MercadoProduct4.png';

export const vendorProducts = [
  {
    img: product1,
    description: 'Peluche Pantera Rosa Pink Panther 1 Metro 100cm Importado',
    price: 4990,
    freeShipping: true,
  },
  {
    img: product2,
    description: 'Peluche Stitch 45cm Importado Lilo Y Stitch Hermosos Suaves',
    price: 5200,
    freeShipping: true,
  },
  {
    img: product3,
    description: 'Peluche Patrulla Canina Compatible Con Paw Patrol 22-25cm',
    price: 1090,
    freeShipping: false,
  },
];

export const PromotedProductsList = [
  {
    img: promotedProduct1,
    description: 'Peluche Oso Gigante 90cm Sentado Edan Funny Land',
    price: 19990,
    freeShipping: true,
  },
  {
    img: promotedProduct2,
    description: 'Peluche De Stich Con Sonido - E.Full',
    price: 7498,
    freeShipping: true,
  },
  {
    img: promotedProduct3,
    description: 'Stich Gigante Importado Extrasuave',
    price: 9999,
    freeShipping: true,
  },
  {
    img: promotedProduct4,
    description: 'Peluche Stich Gigante 60cm importado',
    price: 8899,
    freeShipping: true,
  },
];

export const MercadoShopList = [
  {
    img: MercadoProduct1,
    description: 'Peluche Oso Gigante 90cm Sentado Edan Funny Land',
    price: 9999,
    discountPercent: null,
    freeShipping: true,
    toyStore: '  JUGUETERÍA MINIJUEGOS',
  },
  {
    img: MercadoProduct2,
    description: 'Peluche Angel  55cm Importado Stitch Calidad',
    price: 9999,
    freeShipping: true,
    discountPercent: null,
    toyStore: '  JUGUETERÍA MINIJUEGOS',
  },
  {
    img: MercadoProduct3,
    description: 'Peluche Stitch Sentado Con Corazón 20 Cm Orig. Phi Phi Toys',
    price: 3600,
    discountPercent: 5,
    toyStore: ' ACHUBAE JUGUETERÍA ',
    freeShipping: true,
  },
  {
    img: MercadoProduct4,
    description: 'Peluche Stitch Sentado Sobre Corazón 25 Cm Orig Phi Phi Toys',
    price: 3150,
    discountPercent: 5,
    freeShipping: true,
    toyStore: ' ACHUBAE JUGUETERÍA ',
  },
];

export const relatedProducts = [
  [
    {
      id: 1,
      img: product1,
      description: 'Peluche Pantera Rosa Pink Panther 1 Metro 100cm Importado',
      price: 4990,
      freeShipping: true,
    },
    {
      id: 2,

      img: product2,
      description:
        'Peluche Stitch 45cm Importado Lilo Y Stitch Hermosos Suaves',
      price: 5200,
      freeShipping: true,
    },
    {
      id: 3,

      img: product3,
      description: 'Peluche Patrulla Canina Compatible Con Paw Patrol 22-25cm',
      price: 1090,
      freeShipping: false,
    },
    {
      id: 4,

      img: product4,
      description: 'Peluche Stich xxl 100% Algodó',
      price: 8900,
      freeShipping: true,
    },
    {
      id: 5,

      img: product5,
      description: 'Peluche Angel importado Stich calidad',
      price: 11000,
      freeShipping: false,
    },
  ],
  [
    {
      id: 6,

      img: product8,
      description: 'Peluche Gigante Cienpies Didáctico',
      price: 12900,
      freeShipping: true,
    },
    {
      id: 7,

      img: product6,
      description: 'Mini Stich 20cm Importado',
      price: 3400,
      freeShipping: true,
    },
    {
      id: 8,

      img: product7,
      description: 'Peluche Rosado Extrasuave para nenes',
      price: 16090,
      freeShipping: false,
    },
    {
      id: 9,

      img: product9,
      description: 'Peluche Canino con 10 sonidos',
      price: 8900,
      freeShipping: true,
    },
    {
      id: 10,

      img: product10,
      description: 'Peluche Sonic malvado 30 cm ',
      price: 11000,
      freeShipping: false,
    },
  ],
];
