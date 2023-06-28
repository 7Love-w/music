<<<<<<< HEAD
const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
=======
version https://git-lfs.github.com/spec/v1
oid sha256:ab39bdd5706f4983b995d5c1a85108a2e7cd5f418e8450e3d3a56f9b96236a0e
size 755
>>>>>>> c3222162 (code)
