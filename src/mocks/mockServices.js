const mockServices = {
  en: [
    {
      'Health & Beauty': {
        id: 1,
        name: 'beauty',
        sub: [
          {
            Hair: {
              id: 2,
              name: 'hair',
              sub: []
            },
          },
          {
            Nails: {
              id: 3,
              name: 'nails',
              sub: []
            },
          },
        ],
      },
    },
    {
      Reapir: {
        id: 4,
        name: 'repair',
        sub: [
          {
            Plumber: {
              id: 5,
              name: 'plumber',
              sub: []
            },
          },
          {
            Electrician: {
              id: 6,
              name: 'electrician',
              sub: []
            },
          },
        ],
      },
    },
    {
      Building: {
        id: 7,
        name: 'building',
        sub: []
      },
    },
  ],
  ru: [
    {
      'Красота и Здоровье': {
        id: 1,
        name: 'beauty',
        sub: [
          {
            Волосы: {
              id: 2,
              name: 'hair',
              sub: []
            },
          },
          {
            Ногти: {
              id: 3,
              name: 'nails',
              sub: []
            },
          },
        ],
      },
    },
    {
      Ремонт: {
        id: 4,
        name: 'repair',
        sub: [
          {
            Сантехника: {
              id: 5,
              name: 'plumber',
              sub: []
            },
          },
          {
            Электрика: {
              id: 6,
              name: 'electrician',
              sub: []
            },
          },
        ],
      },
    },
    {
      Строительство: {
        id: 7,
        name: 'building',
        sub: []
      },
    },
  ],
};
export default mockServices;