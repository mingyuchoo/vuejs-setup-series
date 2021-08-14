const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      /**
       * 이 설정은 미리 설정되어 있는 "@storybook"을 인식하게끔 합니다.
       */
      ...config.resolve.alias,
      /**
       * storybook에 인식해야 할 경로 별칭을 모두 추가합니다.
       * - 프로젝트에 나타나는 모든 별칭 경로를 모두 나열해야 컴파일에 성공합니다.
       * - ex) 소스 코드에 "@/a/b/c/d/e/f/h.vue" 가 있다면,
       *       "@/a/b/c/d/e/f" 와 "../src/a/b/c/d/e/f" 로 추가하세요.
       */
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/composables": path.resolve(__dirname, "../src/composables"),
      "@/pages": path.resolve(__dirname, "../src/pages"),
      "@/router": path.resolve(__dirname, "../src/router"),
      "@/store": path.resolve(__dirname, "../src/store"),
    };
    return config;
  },
};
