module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false, // Run yarn test:coverage to generate coverage reports
  collectCoverageFrom: ['lib/**/*.ts'],
  coverageReporters: ['html', 'text-summary'],
  coverageDirectory: '<rootDir>/reports/coverage',
  testMatch: ['**/*.spec.ts'], // Remove when all tests are using Jest
  modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir/reports>'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/jest',
      },
    ],
  ],
};
