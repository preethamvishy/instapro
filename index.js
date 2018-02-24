const fetch = require('isomorphic-fetch')

exports.getUserByUsername = username => (
  fetch(`https://www.instagram.com/${username}/?__a=1`)
    .then(res => res.json())
)
  
exports.getMediaByCode = shortcode => (
  fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`)
    .then(res => res.json())
)

exports.getMediaByLocation = locationId => (
  fetch(`https://www.instagram.com/explore/locations/${locationId}/?__a=1`)
    .then(res => res.json())
)
