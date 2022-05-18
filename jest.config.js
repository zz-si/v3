const jestConfig = {
  // verbose: true,
  // testURL: "http://localhost/",
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  },
  // "transformIgnorePatterns": [
  //   "/node_modules/(?!vue-loading-spinner)",
  // ],
  // testMatch: ["**/__tests__/*.ts"],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};

module.exports = jestConfig;
