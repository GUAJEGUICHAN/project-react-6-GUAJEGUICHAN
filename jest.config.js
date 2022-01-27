module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    './jest.setup',
    'jest-plugin-context/setup',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

}
