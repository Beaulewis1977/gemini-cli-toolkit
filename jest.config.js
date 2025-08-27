export default {
  testEnvironment: 'node',
  preset: null,
  transform: {},
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: [],
  collectCoverageFrom: [
    'lib/**/*.js',
    'scripts/**/*.js',
    '!node_modules/**',
    '!dist/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true
};