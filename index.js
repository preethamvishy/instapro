const fetch = require('isomorphic-fetch')
var request = require('request');
var axios = require('axios');


exports.getUserByUsername = username => (
    fetch(`https://www.instagram.com/${username}/?__a=1`)
        .then(res => res.json())
)

exports.getMediaByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`)
        .then(res => res.json())
)

exports.getMediaLikesByCode = (
    shortcode,
    count,
    commentId = null) => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17864450716183058&shortcode=${shortcode}&first=${count}&after=${commentId}`)
            .then(res => res.json())
    )

exports.getMediaCommentsByCode = (
    shortcode,
    count,
    commentId = null) => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17852405266163336&shortcode=${shortcode}&first=${count}&after=${commentId}`)
            .then(res => res.json())
    )

exports.getMediaByLocation = locationId => (
    fetch(`https://www.instagram.com/explore/locations/${locationId}/?__a=1`)
        .then(res => res.json())
)

exports.getMediaByTag = tag => (
    fetch(`https://www.instagram.com/explore/tags/${tag}/?__a=1`)
        .then(res => res.json())
)
