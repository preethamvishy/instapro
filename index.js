const fetch = require('isomorphic-fetch')
var request = require('request');
var cheerio = require('cheerio');

var cookie = 'ig_pr=2';

exports.getUserByUsername = username => (
    new Promise(function (resolve, reject) {
        request(`http://www.instagram.com/` + username, function (err, resp, html) {
            if (!err) {
                if (resp.statusCode == 200) {
                    const $ = cheerio.load(html);
                    $('body').children().each((i, e) => {
                        eleHTML = $(e).html()
                        if (eleHTML.indexOf('window._sharedData') > -1) {
                            resolve(JSON.parse(eleHTML.split('"ProfilePage":[')[1].split(']},"hostname"')[0]).graphql.user);
                            return false;
                        }
                    })
                } else
                    reject(resp.statusCode)
            } else
                reject(err);
        })
    })
);

exports.getUserIdFromUsername = username => (
    new Promise(function (resolve, reject) {
        request(`http://www.instagram.com/` + username, function (err, resp, html) {
            if (!err) {
                if (resp.statusCode == 200) {
                    const $ = cheerio.load(html);
                    var user = {};

                    $('body').children().each((i, e) => {
                        eleHTML = $(e).html();
                        if (eleHTML.indexOf('window._sharedData') > -1) {
                            resolve(JSON.parse(eleHTML.split('"ProfilePage":[')[1].split(']},"hostname"')[0]).graphql.user.id);
                            return false;
                        }
                    })
                } else
                    reject(resp.statusCode)
            } else
                reject(err);
        });
    })
);

exports.getMediaByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => {
        res.json()
            .then(({
                graphql
            }) => graphql)
    })
    .catch(error => error)
);

exports.getMediaCommentsByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => {
        res.json()
            .then(({
                graphql
            }) => graphql.shortcode_media.edge_media_to_comment)
    })
    .catch(error => error)
);

exports.getTaggedUsersByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => {
        res.json()
            .then(({
                graphql
            }) => graphql.shortcode_media.edge_media_to_tagged_user);
    })
    .catch(error => error)
);

exports.getMediaLikesByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => {
        res.json()
            .then(({
                graphql
            }) => graphql.shortcode_media.edge_media_preview_like)
    })
    .catch(error => error)
);

exports.getMediaOwnerByCode = shortcode => (
    fetch(`https://www.instagram.com/p/${shortcode}/?__a=1`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => {
        res.json()
            .then(({
                graphql
            }) => graphql.shortcode_media.owner)
    })
    .catch(error => error)
);

exports.getMediaByLocation = (locationId, maxId = '') => (
    fetch(`https://www.instagram.com/explore/locations/${locationId}/?__a=1&max_id=${maxId}`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => res.json())
    .then(({
        graphql
    }) => graphql)
    .catch(error => error)
);

exports.getMediaByTag = (tag, maxId = '') => (
    fetch(`https://www.instagram.com/explore/tags/${tag}/?__a=1&max_id=${maxId}`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => res.json())
    .then(({
        graphql
    }) => graphql)
    .catch(error => error)
);

exports.generalSearch = (query) => (
    fetch(`https://www.instagram.com/web/search/topsearch/?query=${query}`, {
        headers: {
            Cookie: cookie
        }
    })
    .then(res => res.json())
    .catch(error => error)
);

exports.getUserProfilePicture = (username) => (
    new Promise(function (resolve, reject) {
        request(`http://www.instagram.com/` + username, function (err, resp, html) {
            if (!err) {
                if (resp.statusCode == 200) {
                    const $ = cheerio.load(html);
                    $('body').children().each((i, e) => {
                        eleHTML = $(e).html()
                        if (eleHTML.indexOf('window._sharedData') > -1) {
                            resolve(JSON.parse(eleHTML.split('"ProfilePage":[')[1].split(']},"hostname"')[0]).graphql.user.profile_pic_url_hd)
                            return false;
                        }
                    })
                } else
                    reject(resp.statusCode);
            } else
                reject(err);
        });
    })
);
