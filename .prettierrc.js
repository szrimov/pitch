module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  bracketSpacing: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.vue',
      options: {
        pugSingleQuote: false,
        bracketSpacing: true,
        bracketSameLine: true,
        pugAttributeSeparator: 'none',
        pugWrapAttributesThreshold: 1,
        pugSingleFileComponentIndentation: true,
        pugSortAttributesBeginning: [
          '^cols$',
          '^v-else$',
          '^v-for$',
          '^:key$',
          '^v-if$',
          '^v-else-if$',
          '^v-on$',
          '^v-bind$',
          '^ref$',
          '^v-model',
          '^name$',
          '^:?type$',
          '^:value$',
          '^v-text$',
          '^:?label$',
          '^:headers$',
          '^:items$',
          '^:?item-text$',
          '^:?item-value$',
          '^:?item-disabled$',
          '^:?placeholder$',
          '^:?src$',
          '^:?color$',
          '^:?text-color$',
          '^:?icon$',
          '^:?small$'
        ],
        pugSortAttributesEnd: [
          '^:?hint$',
          '^:?persistent-hint$',
          '^prepend-',
          '^@click:prepend',
          '^append-',
          '^@click:append',
          '^:to$',
          '^exact$',
          '^:(?!(width|height|loading|disabled|data-))',
          '^target$',
          '^:?width$',
          '^:?height$',
          '^@click',
          '^@',
          '^:loading$',
          '^:disabled$',
          '^:?data-'
        ]
      }
    }
  ]
}
