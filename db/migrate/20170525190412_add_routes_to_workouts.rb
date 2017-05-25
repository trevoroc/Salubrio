class AddRoutesToWorkouts < ActiveRecord::Migration[5.0]
  def change
    add_column :workouts, :route_id, :integer
    remove_column :workouts, :workout_type
  end
end
