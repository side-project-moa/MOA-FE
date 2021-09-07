module.exports = {
 moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],

 testEnvironment: 'jsdom',
 moduleNameMapper: {
  '^@src(.*)$': '<rootDir>/src$1',
 },

 transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
