const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './pages',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
