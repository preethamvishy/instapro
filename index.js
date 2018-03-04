const fetch = require('isomorphic-fetch')

exports.getUserByUsername = username => (
    fetch(`https://www.instagram.com/${username}/?__a=1`)
        .then(res => res.json())
)

exports.getUserIdFromUsername = username => (
    fetch(`https://www.instagram.com/${username}/?__a=1`)
        .then(res => res.json()
        .then(({user}) => { 
                        return { id: user.id } 
                    })
            )
        )

exports.getMediaByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`)
        .then(res => res.json()
        .then(({graphql}) => graphql)
    )
)

exports.getMediaLikesByCode = (
    shortcode,
    count,
    commentId = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17864450716183058&shortcode=${shortcode}&first=${count}&after=${commentId}`)
            .then(res => res.json())
            .then(({data}) => data.shortcode_media)
    )

exports.getMediaCommentsByCode = (
    shortcode,
    count,
    commentId = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17852405266163336&shortcode=${shortcode}&first=${count}&after=${commentId}`)
            .then(res => res.json())
            .then(({data}) => data.shortcode_media.edge_media_to_comment)
    )

exports.getMediaByLocation = (
    locationId,
    maxId = '') => (
        fetch(`https://www.instagram.com/explore/locations/${locationId}/?__a=1&max_id=${maxId}`)
            .then(res => res.json())
    )

exports.getMediaByTag = (
    tag,
    maxId = '') => (
        fetch(`https://www.instagram.com/explore/tags/${tag}/?__a=1&max_id=${maxId}`)
            .then(res => res.json())
            .then(({graphql}) => graphql)
    )

exports.getUserMediaAdvanced = (
    userId,
    count = 50,
    after = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=${userId}&first=${count}&after=${after}`)
            .then(res => res.json())
    )

exports.getUserFollowers = (
    userId,
    count = 50,
    after = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17851374694183129&id=${userId}&first=${count}&after=${after}`)
            .then(res => res.json())
            .then(({data}) => data.user)
    )

exports.getUserFollowing = (
    userId,
    count = 50,
    after = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17874545323001329&id=${userId}&first=${count}&after=${after}`)
            .then(res => res.json())
            .then(({data}) => data.user)            
    )
exports.generalSearch = (
    query) => (
        fetch(`https://www.instagram.com/web/search/topsearch/?query=${query}`)
            .then(res => res.json())
    )

