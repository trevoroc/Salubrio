@workouts.each do |workout|
  json.set! workout.id do
    json.username workout.user.username
    json.datetime workout.datetime
    json.title workout.title
    json.duration workout.duration
    json.distance workout.distance
  end
end
