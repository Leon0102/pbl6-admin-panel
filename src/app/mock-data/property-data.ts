import { faker } from '@faker-js/faker';
export const PROPERTY_CONTENT = [
  {
    id: faker.random.alpha(),
    name: faker.name.firstName(),
    rating: faker.random.numeric(),
    address: faker.address.country(),
    createdAt: faker.date.past(),
  },
  {
    id: faker.random.alpha(),
    name: faker.name.firstName(),
    rating: faker.random.numeric(),
    address: faker.address.country(),
    createdAt: faker.date.past(),
  },
  {
    id: faker.random.alpha(),
    name: faker.name.firstName(),
    rating: faker.random.numeric(),
    address: faker.address.country(),
    createdAt: faker.date.past(),
  },
];
