module.exports = {
  bail: 1,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ["html", "text"],
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: [
    '**/*.spec.ts'
  ],
  verbose: true
};
