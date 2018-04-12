const fetch = require('isomorphic-fetch')
var cookie = 'ig_pr=2'

exports.getUserByUsername = username => (
    fetch(`https://www.instagram.com/${username}/?__a=1`, {
        headers: { Cookie: cookie }
    })
        .then(res => res.json())
        .then(({ graphql }) => graphql)
        .catch(err => {
            err.message = `"${username}" not found`;
            throw err;
        })
)

exports.getUserIdFromUsername = username => (
    fetch(`https://www.instagram.com/${username}/?__a=1`, {
        headers: { Cookie: cookie }
    })
        .then(res => res.json()
            .then(({ graphql }) => {
                return { id: graphql.user.id }
            })
        )
)

exports.getMediaByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`, {
        headers: { Cookie: cookie }
    })
        .then(res => res.json()
            .then(({ graphql }) => graphql)
        )
)

exports.getMediaLikesByCode = (
    shortcode,
    count,
    commentId = '') => (

        fetch(`https://www.instagram.com/graphql/query/?query_id=17864450716183058&shortcode=${shortcode}&first=${count}&after=${commentId}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
            .then(({ data }) => data.shortcode_media)
    )

exports.getMediaCommentsByCode = (
    shortcode,
    count,
    commentId = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17852405266163336&shortcode=${shortcode}&first=${count}&after=${commentId}`)
            .then(res => res.json())
            .then(({ data }) => data.shortcode_media.edge_media_to_comment)
    )

exports.getMediaByLocation = (
    locationId,
    maxId = '') => (
        fetch(`https://www.instagram.com/explore/locations/${locationId}/?__a=1&max_id=${maxId}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
            .then(({ graphql }) => graphql)            
    )

exports.getMediaByTag = (
    tag,
    maxId = '') => (
        fetch(`https://www.instagram.com/explore/tags/${tag}/?__a=1&max_id=${maxId}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
            .then(({ graphql }) => graphql)
    )

exports.getUserMediaAdvanced = (
    userId,
    count = 50,
    after = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17888483320059182&id=${userId}&first=${count}&after=${after}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
    )

exports.getUserFollowers = (
    userId,
    count = 50,
    after = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17851374694183129&id=${userId}&first=${count}&after=${after}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
            .then(({ data }) => data.user)
    )

exports.getUserFollowing = (
    userId,
    count = 50,
    after = '') => (
        fetch(`https://www.instagram.com/graphql/query/?query_id=17874545323001329&id=${userId}&first=${count}&after=${after}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
            .then(({ data }) => data.user)
    )
exports.generalSearch = (
    query) => (
        fetch(`https://www.instagram.com/web/search/topsearch/?query=${query}`, {
            headers: { Cookie: cookie }
        })
            .then(res => res.json())
    )

exports.getUserProfilePicture = username => (
    fetch(`https://www.instagram.com/${username}/?__a=1`, {
        headers: { Cookie: cookie }
    })
        .then(res => res.json())
        .then(({ graphql }) => graphql.user.profile_pic_url_hd)
)
