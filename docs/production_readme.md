# Salubrio

[Salubrio live](https://salubrio.herokuapp.com)

Salubrio is a full-stack web application inspired by Strava. It is implemented using Ruby on Rails on the backend with a PostgreSQL database. On the frontend, React.js is responsible for rendering content, while Redux provides the architecture for maintaining client-side state.

## Features & Implementation

### Route Creation

One of the core features of Salubrio is a clean and convenient interface to make custom running routes directly on a Google Map. This allows the user to manually construct a route by placing waypoints on the map with a single click; the route is updated dynamically so that the user can view the route so far. The route also includes important information such as the total distance of the route and the net change in elevation over the entire run.

Building this feature required a front to back approach. As I had no previous experience with the Google Maps API, I was uncertain what data was needed to store a single route. Initially, the feature was a simple interactive map rendered within a React component. The map component has an event listener that detects clicks and adds a Marker at the clicked point. The component accumulates these points, and if there are at least 2, requests directions from the Google Directions API. Upon receiving the response, the distance is calculated using the length of each leg of the journey, the net elevation is calculated using the elevations of the endpoints, and the directions are added to the map.

The map reflects the addition of each waypoint by updating the visible path, as well as displaying the updated distance and elevation data on the toolbar at the bottom of the page. When the user is satisfied with their route, they can name it using the text input in the toolbar and click create! This triggers a function that dispatches a thunk action that will be intercepted by middleware. The middleware will then execute an API call to the database containing the route's necessary information. This payload features the route's name, information, the id for the creating user, and the waypoints.

Storing routes presented one of the major design conundrums of this project; the minimum amount of data to reproduce a specific route needed to be stored in a relational database. Before the route is sent to the database, the array of waypoints (which are themselves JavaScript objects with lat and lng keys) is converted to a string in JSON format. They are stored as strings in the database, and on retrieval JSON.parse is used to reproduce the array. This array is used in Google API calls to get the same path.

### Workout Feed

The workout feed lists logged workouts in a quickly digestible format, including the user, the distance, time, and pace. The most notable feature, however, is the static map of the route associated with each workout that is included with each workout item. This presented a different design challenge than route creation because it necessitated retrieving, processing, and displaying many routes on the same page simultaneously. Making a request to the Google Directions API for every displayed workout with an associated route is computationally infeasible.

Instead, when the batch of workouts is fetched from the database, the associated waypoints are also included. Within each workout item, a request is made to the Google Static Maps API using the waypoints. This is a much cheaper operation with a much higher maximum request quota, making it perfect for the purpose.

The workout feed component is also designed to be flexible in that the subset of workouts listed can be customized. It can be used to list all logged workouts by all users, but the API request can also be altered to list the workouts for a single user. This allows the component to be reused on a user profile page, featuring only that user's personal workouts.

## Future Directions for the project

I plan to continue work on Salubrio in addition to the current features. Some ideas for future features are discussed below.

### Route page

Displaying a specific page featuring a single route and its information would be cool, especially if it included a compilation of all the workouts the user had logged on that route, as well as some cumulative stats for those workouts.

### Profile page

A personal profile of a single user, featuring beautiful visualizations of the user's personal data.

### Search on Route Creation

Allows the user to search for a location and immediately center the map on that location.

### Friends

Allow users to make connections with each other and filter their feed to see only their friends' workouts.
