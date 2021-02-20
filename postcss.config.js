module.exports = {
  plugins: [
    require('postcss-extend-rule'),
    require('postcss-each'),
    require('postcss-atroot'),
    require('postcss-property-lookup'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')
  ]
}
