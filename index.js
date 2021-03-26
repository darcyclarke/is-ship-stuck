module.exports = iss = async () => {
  const fetch = require('node-fetch')
  const cheerio = require('cheerio')
  try {
    const response = await fetch('https://istheshipstillstuck.com/')
    const $ = cheerio.load(await response.text())
    const status = trim($('h1+p a').text().toLowerCase().replace('.',''))
    return status === 'yes'
  } catch (e) {
    return true
  }
}
