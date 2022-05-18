module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "current"
      }
    }],
    // "@babel/preset-typescript"
  ],
  plugins: ["@babel/plugin-transform-runtime"],
  // , "transform-es2015-modules-commonjs"
};
