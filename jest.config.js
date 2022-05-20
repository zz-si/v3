const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  },
  "transformIgnorePatterns": [
    "/node_modules/(?!vue-loading-spinner)"
  ],
  "testMatch": [
    "<rootDir>/__tests__/**/*.spec.ts"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{ts,vue}",
    "!**/node_modules/**"
  ],
  "coverageReporters": ["json"],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "coverageDirectory": "coverage",
  "forceCoverageMatch": ["**/*.*.ts"]
};

module.exports = jestConfig;
