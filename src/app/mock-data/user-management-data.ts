import { faker } from '@faker-js/faker';
export interface PeriodicElement {
  email: string;

  url: string;

  createdAt: Date;
  country: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  },

  {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  }, {
    email: faker.internet.email(),

    url: faker.internet.url(),

    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  },
  {
    email: faker.internet.email(),
    url: faker.internet.url(),
    createdAt: faker.date.between('2018-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
    country: faker.address.country()
  },
];
