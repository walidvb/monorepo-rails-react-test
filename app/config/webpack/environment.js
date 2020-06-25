const { environment } = require('@rails/webpacker')
const path = require('path')

const resolved = {
  resolve: {
    alias: {
      'dep-test$': path.resolve(__dirname, '..', '..', '..', 'dep-test'),
    },
    symlinks: false,
  },
}

environment.config.merge(resolved)

module.exports = environment
