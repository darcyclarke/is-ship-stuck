#!/usr/bin/env node
(async () => {
  const iss = require('./index.js')
  console.log(await iss())
})()
