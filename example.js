

const {
    getMediaByCode,
    getUserByUsername,
    getMediaByLocation,
    getMediaByTag,
    getMediaLikesByCode,
    getMediaCommentsByCode,
    generalSearch,
    getUserIdFromUsername,
    getUserProfilePicture,
    getTaggedUsersByCode,
    getMediaOwnerByCode
  } = require('./index');

getUserByUsername('instagram').then((user) => {
    console.log(user)
})

getUserIdFromUsername('instagram').then((id) => {
    console.log(id)
})

getMediaByCode('BUu14BdBkO5').then(media => {
    console.log(media)
})

getMediaOwnerByCode('BUu14BdBkO5').then(media => {
    console.log(media)
})

getMediaByLocation('292188415').then(({ location }) => {
    console.log(location.id)
    console.log(location.name)
    console.log(location.slug)
})

getMediaByTag('abcd').then((media) => {
    console.log(media)
})

generalSearch('insta').then((results) => {
    console.log(results)
})

getUserProfilePicture('instagram').then((url) => {
    console.log(url)
})

getMediaLikesByCode('BUu14BdBkO5').then((media) => {
    console.log(media)
})

getMediaCommentsByCode('BUu14BdBkO5').then((media) => {
    console.log(media)
})

getTaggedUsersByCode('BUu14BdBkO5').then((media) => {
    console.log(media)
})