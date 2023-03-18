const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const port = process.env.PORT || 3000

module.exports = {
  port,
}
