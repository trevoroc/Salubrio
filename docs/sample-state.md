```js
{
  currentUser: {
    id: 1,
    firstname: 'Trevor'
    lastname: 'O\'Connor'
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] }
  },
  feed: {
    activities: {
      1: {
        id: 1
        userId: 1
        user: 'Trevor O\'Connor',
        date: '16 May 2017 2:10 PM',
        name: "Afternoon Run",
        time: 780000, // Time in ms
        distance: 7920, // Distance in feet
      }
    },
    routes: {
      1: {
        id: 3,
        activityId: 1,
        userId: 1,
        routeInfo: {
          routeName: 'Campus Run',
          ...
        }
      }
    }
  }
}
```
