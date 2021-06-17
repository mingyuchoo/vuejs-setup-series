module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: [
    "<rootDir>/**/*.spec.{j,t}s?(x)",
    "<rootDir>/**/__tests__/*.{j,t}s?(x)",
    "<rootDir>/**/tests/unit/**/*.spec.{j,t}s?(x)",
  ],
};
