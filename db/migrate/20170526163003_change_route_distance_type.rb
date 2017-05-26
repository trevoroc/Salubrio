class ChangeRouteDistanceType < ActiveRecord::Migration[5.0]
  def change
    change_column :routes, :distance, :float
  end
end
