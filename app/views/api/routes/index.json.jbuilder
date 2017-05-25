@routes.each do |route|
  json.set! route.id do
    json.name route.name
    json.waypoints route.waypoints
  end
end
