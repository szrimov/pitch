module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // настройка для babel
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest', // возможности последней версии ES
    sourceType: 'module',
    requireConfigFile: false
  },
  // конфиги/плагины
  extends: [
    'eslint:recommended',
    'airbnb-base', // настройка eslint от airbnb
    'plugin:vue/recommended',
    '@nuxt/eslint-config',
    'plugin:nuxt/recommended',
    'prettier' // форматирование
  ],
  rules: {
    // Проверка на максимальное количество атрибутов в строке
    // Значения singleline.max (number) и multiline.max (number) установим в значение 1,
    // чтобы каждый атрибут начинался с новой строчки.
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    // Проверка регистра для стиля именования
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true
      }
    ],
    // Проверка нерегулярных пробелов:
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false
      }
    ],
    // Проверка на определенный регистр для имени компонента:
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    // Запретить дублирование имен полей:
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],
    //  Проверка  запятых:
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    // обеспечивает максимальную длину строки
    'max-len': ['error', {code: 120}],
    // обеспечить согласованное использование расширения файла в пути импорта
    'import/extensions': 'off',
    // ESLint предпочитает экспорт по умолчанию
    'import/prefer-default-export': 'off',
    // разрешшенный импорт файла
    'import/no-unresolved': 'off',
    // отступы
    indent: ['error', 2],
    // кавычки
    quotes: ['error', 'single'],
    // точка с запятой
    semi: ['error', 'never'],
    // пробел перед скобками в ф-ции
    'space-before-function-paren': ['warn', 'never'],
    // пробел перед скобками в ф-ции
    'space-in-parens': [1, 'never'],
    // 'vue/name-property-casing': ['error', 'kebab-case'],
    'no-console': ['warn', {allow: ['warn', 'error']}],
    // ? default в пропсах - включено
    // 'vue/require-default-prop': 'off',
    // ? порядок св-в/методов в компоненте - включено
    // 'vue/order-in-components': 'off',
    // скобки в стрелочной функции
    'arrow-parens': ['warn', 'as-needed'],
    'import/order': 'off',
    'no-mixed-operators': 'off'
  }
}
