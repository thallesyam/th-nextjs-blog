const withImages = require('next-images')

module.exports = {
  env: {
    BASEURL: 'http://localhost:3000/api'
  },
  withImages: withImages({
    esModule: true
  })
}
