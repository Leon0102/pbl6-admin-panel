import { faker } from '@faker-js/faker';

export const STAT_CARD = [
  {
    title: 'Revenue',
    iconUrl: 'https://img.icons8.com/color/96/null/banknotes.png',
    stat: `${faker.datatype.number({ min: 1000000 })} VNĐ`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  },
  {
    title: 'User',
    iconUrl: 'https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png  ',
    stat: `${faker.datatype.number(40000)}`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  },
  {
    title: 'Property',
    iconUrl: 'https://img.icons8.com/color/96/null/real-estate.png',
    stat: `${faker.datatype.number(60000)}`,
    percent: `${faker.datatype.number(100)}%`,
    isGrowth: faker.datatype.boolean()
  }
];
