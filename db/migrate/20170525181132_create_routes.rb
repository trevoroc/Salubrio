class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false, index: true
      t.string :name, null: false
      t.string :waypoints, null: false
      t.integer :distance, null: false
      t.integer :elevation, null: false
      t.timestamps
    end
  end
end
