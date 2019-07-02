module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  ignore: ['node_modules/**', '**/*.test.js'],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ]
}
