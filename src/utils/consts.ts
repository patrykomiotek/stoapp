// const settings = {

// } as const

const config = {
  apiUrl: 'http://example.com',
  apiKey: '123',
};

type Config = typeof config;

config.apiKey = 'https://evil.com';

const config2 = {
  apiUrl: 'http://example.com',
  apiKey: '123',
} as const;

const const3 = {
  apiUrl: 'https://sth.com',
  apiKey: '1234',
  randomField: '1234',
} satisfies Config;

type TypeA = number;
type TypeB = number;

const numberA: TypeA = 5;
const numberB: TypeB = 5;

console.log(numberA == numberB); // true
console.log(numberA === numberB); // true

// if (typeof numberA === 'number') {

// }

type Brand<T, B> = T & { readonly __brand: B };

type PLN = Brand<number, 'PLN'>;
type USD = Brand<number, 'USD'>;

const pln = 100 as PLN;
const usd = 50 as USD;

// console.log(pln + usd);

class Exchange {
  add(amount1: PLN, amount2: PLN) {
    return amount1 + amount2;
  }
}
const exchange = new Exchange();

// number & { __brand: PLN }

exchange.add(pln, numberB);
