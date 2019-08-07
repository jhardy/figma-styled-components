module.exports = {
  transform: {
    '^.+\\.(jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['**/?(*.)(spec|test).(ts|js)?(x)'],
}
