module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: './',
  testEnvironment: 'node',
  testURL: 'http://localhost/',
  coverageDirectory: '<rootDir>/build/coverage/',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleFileExtensions: ['js', 'ts', 'node'],
  coveragePathIgnorePatterns: ['<rootDir>/src/test/javascript'],
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'cobertura', 'html'],
  moduleNameMapper: {
    'server/(.*)': '<rootDir>/src/$1',
  },
  reporters: ['default', ['jest-junit', { output: './build/test-results/TESTS-results-jest.xml' }]],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: [
    // '<rootDir>/src/test/javascript/spec/storage-mock.ts'
  ],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      diagnostics: false,
    },
  },
};
