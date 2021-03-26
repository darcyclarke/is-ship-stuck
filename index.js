module.exports = iss = async () => {
  const fetch = require('node-fetch')
  const cheerio = require('cheerio')
  const response = await fetch('https://istheshipstillstuck.com/')
  const $ = cheerio.load(await response.text())
  const status = $('h1+p a').text().toLowerCase().replace('.','')
  return status === 'yes'
}