// module.exports = {
//   diff: true,
//   extension: ['js'],
//   colors: true,
//   // reporter: 'spec',
//   recursive: true,
//   spec: 'src/**/*.spec.js'
// }

module.exports = {
  extension: ['js'],
  colors: true,
  // require: ['@babel/register', 'jsdom-global/register', 'test/setup.js'],
  reporter: 'spec',
  spec: ['src/**/*.spec.js'],
  recursive: true
}
