class CreateWorkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false
      t.datetime :datetime, null: false
      t.string :type, null: false
      t.integer :duration, null: false
      t.integer :distance
      t.integer :elevation
      t.text :description
      t.timestamps
    end
  end
end
