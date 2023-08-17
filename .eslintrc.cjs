// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['@vinicunca/eslint-config', '@unocss'],

  rules: {
    'sonarjs/cognitive-complexity': 'off',
  },
});
