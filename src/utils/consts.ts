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
