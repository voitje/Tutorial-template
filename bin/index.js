const env = require('./env');
const paths = require('./paths');

console.table(env);

module.exports = {
  isPROD: env.NODE_ENV === 'production',
  isDEV: env.NODE_ENV === 'development',
  paths,
  ...env,
};