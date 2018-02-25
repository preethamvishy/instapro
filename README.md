Get the widest range of Instagram data possible without Instagram API keys or logging in. A Node.js library that supports more endpoints than similar libraries without authentication.

#### Data available

- Users' data
- Users' media
- Followers and following list of any public user
- Media search by tag
- Media search by location
- Media search by shortcode
- Likes and comments for media by shortcode
- General search

All endpoints support use of `max_id` / `after` to customize search. Endpoints also return cursors for paginated searching.

#### Usage

`Example.js` provides examples of each supported endpoint.

```javascript


const {
    getMediaByCode,
    getUserByUsername,
    getMediaByLocation,
    getMediaByTag,
    getMediaLikesByCode,
    getMediaCommentsByCode,
    getUserFollowers,
    getUserFollowing,
    getUserMediaAdvanced
  } = require('./index');

getUserByUsername('instagram').then(({ user }) => {
    console.log(user.id)
})

getMediaByCode('BUu14BdBkO5').then(media => {
    console.log(media)
})

getMediaByLocation('292188415').then(({ location }) => {
    console.log(location.name)
})

getMediaByTag('abcd').then((media) => {
    console.log(media)
})

getMediaLikesByCode('BUu14BdBkO5', '50').then((media) => {
    console.log(media)
})

getUserFollowers('25025320').then((list) => {
    console.log(list)
})

getUserFollowing('25025320').then((list) => {
    console.log(list)
})

getUserMediaAdvanced('25025320', 24).then((user) => {
    console.log(user)
})

generalSearch('insta').then((results) => {
    console.log(results)
})
```



## License
MIT