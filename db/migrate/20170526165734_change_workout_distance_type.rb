class ChangeWorkoutDistanceType < ActiveRecord::Migration[5.0]
  def change
    change_column :workouts, :distance, :float
  end
end
