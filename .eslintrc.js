module.exports = {
  root: true,
  // This tells ESLintto load the config from the package `eslint-config-custom`
  parserOptions: {
    project: ["./packages/*/tsconfig.json"],
  },
  extends: ["custom"],
};
