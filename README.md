# instapro 🚀

Get the widest range of Instagram data possible without Instagram API keys or logging in. A Node.js library that supports more endpoints than similar libraries without authentication.

https://www.npmjs.com/package/instapro

![instapro](https://snag.gy/oRpmfX.jpg)

#### Data available

- Users' data
- Get User ID from username
- Users' media
- General search
- Media search by tag
- Media search by location
- Media search by shortcode
- Likes and comments for media by shortcode
- Tagged users in media by shortcode
- Media owner data by media shortcode
- Profile picture URL from username

#### Usage

Instapro can be installed via npm: `npm install instapro --save`

`Example.js` provides examples of each supported endpoint.

```javascript


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
```



## License
MIT
