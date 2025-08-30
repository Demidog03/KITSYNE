module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  importOrder: ['^react$', '^next', '^[a-z]', '^@.*', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  endOfLine: 'auto',
};
