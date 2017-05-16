```js
{
  currentUser: {
    id: 1,
    firstName: 'Trevor'
    lastName: 'O\'Connor'
  },
  errors: [
    'Username can\'t be blank'
  ],
  feed: {
    workouts: {
      1: {
        id: 1
        userId: 1
        user: 'Trevor O\'Connor',
        date: '16 May 2017 2:10 PM',
        name: "Afternoon Run",
        time: 780000, // Time in ms
        distance: 7920, // Distance in feet
        elevation: 200, // Net in feet
        type: 'Run'
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
