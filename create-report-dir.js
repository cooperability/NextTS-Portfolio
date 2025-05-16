// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

const dir = path.join(__dirname, 'accessibility-reports')

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
  console.log('Created directory:', dir)
} else {
  console.log('Directory already exists:', dir)
}
