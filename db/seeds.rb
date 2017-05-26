# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user = User.create(username: 'trevor', password: 'password')

Workout.destroy_all
u_id = user.id
time = DateTime.now

Workout.create(user_id: u_id,
               title: 'Morning Run',
               datetime: time,
               duration: 1200,
               distance: 2.0,
               elevation: 200,
               description: 'Lovely morning jog')

Workout.create(user_id: u_id,
               title: 'Lunch Run',
               datetime: time,
               duration: 1200,
               distance: 2.0,
               elevation: 200,
               description: 'Lovely lunch jog')

Workout.create(user_id: u_id,
               title: 'Afternoon Run',
               datetime: time,
               duration: 1200,
               distance: 2.0,
               elevation: 200,
               description: 'Lovely afternoon jog')

Workout.create(user_id: u_id,
               title: 'Evening Run',
               datetime: time,
               duration: 1200,
               distance: 2.0,
               elevation: 200,
               description: 'Lovely evening jog')
