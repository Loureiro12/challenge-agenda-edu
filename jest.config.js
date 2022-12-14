module.exports = {
  testIgnorePatterns: ['/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/bable-jest',
  },
  testEnvironment: 'jsdom',
}
